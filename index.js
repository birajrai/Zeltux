const { Client, GatewayIntentBits } = require('discord.js')
const { token } = require('./config.json')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences],
})
const styles = {
    successColor: chalk.bold.green,
    warningColor: chalk.bold.yellow,
    infoColor: chalk.bold.blue,
    commandColor: chalk.bold.cyan,
    userColor: chalk.bold.magenta,
    errorColor: chalk.red,
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
