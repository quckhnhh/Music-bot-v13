const player = require("../../client/player");

module.exports = {
    name: 'skip',
    aliases: ['s'],

    run: async (client, message, args) => {
        const queue = player.getQueue(message.guild.id);
        if (!queue?.playing) return message.channel.send('Không có bài hát nào đang phát .')
        await queue.skip();
        
        message.channel.send('Đã bỏ qua bài hát hiện tại!')
    }
}