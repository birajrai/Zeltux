const { Client, GatewayIntentBits } = require('discord.js')
const { token } = require('./config.json')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

console.log(`
${chalk.red('███████╗')} ${chalk.green('███████╗')} ${chalk.blue('██╗  ')} ${chalk.yellow('████████╗')} ${chalk.magenta('██╗   ██╗')} ${chalk.cyan('██╗  ██╗')}
${chalk.red('╚══███╔╝')} ${chalk.green('██╔════╝')} ${chalk.blue('██║  ')} ${chalk.yellow('╚══██╔══╝')} ${chalk.magenta('██║   ██║')} ${chalk.cyan('╚██╗██╔╝')}
${chalk.red('  ███╔╝ ')} ${chalk.green('█████╗  ')} ${chalk.blue('██║     ')} ${chalk.yellow('██║   ')} ${chalk.magenta('██║   ██║')} ${chalk.cyan(' ╚███╔╝ ')}
${chalk.red(' ███╔╝  ')} ${chalk.green('██╔══╝  ')} ${chalk.blue('██║     ')} ${chalk.yellow('██║   ')} ${chalk.magenta('██║   ██║')} ${chalk.cyan(' ██╔██╗ ')}
${chalk.red('███████╗')} ${chalk.green('███████╗')} ${chalk.blue('███████╗')} ${chalk.yellow('██║   ')} ${chalk.magenta('╚██████╔╝')} ${chalk.cyan('██╔╝ ██╗')}
${chalk.red('╚══════╝')} ${chalk.green('╚══════╝')} ${chalk.blue('╚══════╝')} ${chalk.yellow('╚═╝    ')} ${chalk.magenta('╚═════╝ ')} ${chalk.cyan('╚═╝  ╚═╝')}
`)

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
})
const styles = {
    successColor: chalk.bold.green,
    warningColor: chalk.bold.yellow,
    infoColor: chalk.bold.blue,
    commandColor: chalk.bold.cyan,
    userColor: chalk.bold.magenta,
    errorColor: chalk.red,
    highlightColor: chalk.bold.hex('#FFA500'),
    accentColor: chalk.bold.hex('#00FF7F'),
    secondaryColor: chalk.hex('#ADD8E6'),
    primaryColor: chalk.bold.hex('#FF1493'),
    dividerColor: chalk.hex('#FFD700'),
}

global.styles = styles

const handlerFiles = fs
    .readdirSync(path.join(__dirname, 'handlers'))
    .filter((file) => file.endsWith('.js'))
counter = 0
for (const file of handlerFiles) {
    counter += 1
    const handler = require(`./handlers/${file}`)
    if (typeof handler === 'function') {
        handler(client)
    }
}
console.log(
    global.styles.successColor(`✅ Succesfully loaded ${counter} handlers`)
)

client.login(token)
