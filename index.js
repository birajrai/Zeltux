const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const deployCommands = require('./handlers/deployCommands');
const commandHandler = require('./handlers/commandHandler');
const { connectToDatabase } = require('./handlers/database');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


commandHandler(client);


(async () => {
  await deployCommands(); 
})();


client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error executing this command!', ephemeral: true });
  }
});
connectToDatabase();



client.login(token);
