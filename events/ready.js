const { Events, ActivityType } = require('discord.js')
module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(
            global.styles.userColor(`✅ Ready! Logged in as ${client.user.tag}`)
        )
        client.user.setPresence({
            status: 'idle',
            activities: [
                {
                    name: 'custom',
                    type: ActivityType.Custom,
                    state: '✅ Zeltux Bot V1.0',
                },
            ],
        })
    },
}
