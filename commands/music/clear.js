module.exports = {
    name: 'clear',
    aliases: ['cq'],

    async run(client, message) {
        const queue = client. player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.reply(`Không có bài hát nào đang phát .`);

        if (!queue.tracks[0]) return message.channel.send(`Danh sách nhạc đang trống...`);

        await queue.clear();

        message.channel.send(`Hàng đợi vừa được xóa 🗑️`);
    },
};