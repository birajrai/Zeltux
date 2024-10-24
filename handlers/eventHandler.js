const fs = require('fs')
const path = require('path')
module.exports = (client) => {
    const eventsPath = path.join(__dirname, '../events')
    const eventFiles = fs
        .readdirSync(eventsPath)
        .filter((file) => file.endsWith('.js'))
    count = 0
    for (const file of eventFiles) {
        count += 1
        const filePath = path.join(eventsPath, file)
        const event = require(filePath)
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args))
        } else {
            client.on(event.name, (...args) => event.execute(...args))
        }
    }
    console.log(
        global.styles.successColor(`✅ Succesfully loaded ${count} events`)
    )
}
