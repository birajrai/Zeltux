const mongoose = require('mongoose')

const ServerStatusSchema = new mongoose.Schema({
    guildId: String,
    channelId: String,
    serverName: String,
    serverIp: String,
    gameMode: { type: String, enum: ['java', 'bedrock'] },
    messageId: { type: String, default: null }, // To store the message ID
})

module.exports = mongoose.model('ServerStatus', ServerStatusSchema)
