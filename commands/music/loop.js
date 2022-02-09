const { QueueRepeatMode } = require('discord-player');
const player = require("../../client/player");

module.exports = {
    name: "loop",
    aliases: ['repeat', 'rp'],

    run: async(client, message, args) => {
        const queue = player.getQueue(message.guild)
        if (!queue?.playing) return message.channel.send('Không có bài hát nào đang phát .')

        if (queue.repeatMode) {
            queue.setRepeatMode(QueueRepeatMode.OFF);
            return message.channel.send('Loop: ***\`tắt\`***');
        } else {
            queue.setRepeatMode(QueueRepeatMode.TRACK);
            return message.channel.send('Loop: ***\`bật\`***');
        };
    }
}