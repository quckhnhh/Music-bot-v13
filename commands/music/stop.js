const player = require("../../client/player");

module.exports = {
    name: 'stop',

    async run(client, message, args) {
        if(!message.member.voice.channel) return message.reply('Bạn chưa vào kênh thoại!');
        const queue = player.getQueue(message.guild.id);
        
        if (!queue?.playing) return message.channel.send('Không có bài hát nào đang phát .')

        await queue.destroy();
        message.channel.send('Đã dừng phát nhạc!')
    }
}