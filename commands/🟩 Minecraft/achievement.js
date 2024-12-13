const {
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('achievement')
        .setDescription('Generate a Minecraft-style achievement')
        .addStringOption((option) =>
            option
                .setName('head')
                .setDescription('Header for the achievement')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName('text')
                .setDescription('Body for the achievement')
                .setRequired(true)
        ),

    async execute(interaction) {
        const achievementHead = interaction.options.getString('head')
        const achievementText = interaction.options.getString('text')
        const achievementUrl = `https://minecraftskinstealer.com/achievement/1/${encodeURIComponent(achievementHead)}/${encodeURIComponent(achievementText)}`

        const downloadButton = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setLabel('Download Achievement')
                .setStyle(ButtonStyle.Link)
                .setURL(achievementUrl)
        )

        await interaction.reply({
            embeds: [
                {
                    title: `🏆 Minecraft Achievement`,
                    image: { url: achievementUrl },
                    color: 0xffaa00,
                    description: `Custom achievement unlocked!`,
                },
            ],
            components: [downloadButton],
        })
    },
}
