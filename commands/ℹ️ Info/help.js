const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription(
      "Displays a list of commands or detailed info about a specific command.",
    )
    .addStringOption((option) =>
      option
        .setName("command")
        .setDescription("Get detailed info about a specific command"),
    ),

  async execute(interaction) {
    const { client } = interaction;
    const commandName = interaction.options.getString("command");
    const helpEmbed = new EmbedBuilder().setColor(0x5865f2);

    if (commandName) {
      const command = client.commands.get(commandName);
      if (!command) {
        return interaction.reply({
          content: "❌ Command not found!",
          ephemeral: true,
        });
      }

      helpEmbed
        .setTitle(`🔍 Command: /${command.data.name}`)
        .setDescription(command.data.description || "No description available.")
        .addFields({
          name: "🛠️ Usage",
          value: `\`/${command.data.name}\``,
          inline: true,
        })
        .setFooter({
          text: `Requested by ${interaction.user.tag}`,
          iconURL: interaction.user.displayAvatarURL(),
        })
        .setTimestamp();

      return interaction.reply({ embeds: [helpEmbed] });
    } else {
      const categories = {};
      client.commands.forEach((cmd) => {
        const category = cmd.category || "Uncategorized";
        if (!categories[category]) {
          categories[category] = [];
        }
        categories[category].push(cmd.data.name);
      });

      const categoryOptions = Object.keys(categories).map((category) => ({
        label: category,
        value: category,
        description: `View commands in the ${category} category`,
      }));

      const selectMenu = new StringSelectMenuBuilder()
        .setCustomId("help-menu")
        .setPlaceholder("Choose a category to view commands")
        .addOptions(categoryOptions);

      const row = new ActionRowBuilder().addComponents(selectMenu);

      helpEmbed
        .setTitle("✨ Help Menu ✨")
        .setDescription(
          "Select a category from the dropdown below to see its commands.",
        )
        .setColor(0x5865f2)
        .setFooter({
          text: `Requested by ${interaction.user.tag}`,
          iconURL: interaction.user.displayAvatarURL(),
        })
        .setTimestamp();

      Object.entries(categories).forEach(([category]) => {
        helpEmbed.addFields({
          name: `\`${category}\``,
          value: "\u200B",
          inline: true,
        });
      });

      helpEmbed.addFields({
        name: "Instructions",
        value:
          "🔽 Use the dropdown menu to select a category and view its commands.",
        inline: false,
      });

      await interaction.reply({ embeds: [helpEmbed], components: [row] });

      const filter = (i) =>
        i.customId === "help-menu" && i.user.id === interaction.user.id;
      const collector = interaction.channel.createMessageComponentCollector({
        filter,
        time: 60000,
      });

      collector.on("collect", async (i) => {
        const selectedCategory = i.values[0];
        const commandsInCategory = categories[selectedCategory];

        const categoryEmbed = new EmbedBuilder()
          .setColor(0x5865f2)
          .setTitle(`🗂️ Commands in ${selectedCategory}`)
          .setDescription(
            commandsInCategory.map((cmd) => `\`/${cmd}\``).join(", ") ||
              "No commands available.",
          )
          .setFooter({
            text: `Requested by ${interaction.user.tag}`,
            iconURL: interaction.user.displayAvatarURL(),
          })
          .setTimestamp();

        await i.update({ embeds: [categoryEmbed], components: [row] });
      });

      collector.on("end", async () => {
        selectMenu.setDisabled(true);
        const rowDisabled = new ActionRowBuilder().addComponents(selectMenu);
        await interaction.editReply({ components: [rowDisabled] });
      });
    }
  },
};
