const { QueryType } = require('discord-player');
const player = require("../../client/player");

module.exports = {
    name: 'play',
    aliases: ['p'],


    async run(client, message, args) {
        if (!args[0]) return message.reply(`Vui lòng nhập tên bài hát cần tìm hoặc URL nhạc!`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.reply(`Không tìm thấy kêt quả !!`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.reply(`Bot không thể vào kênh thoại !!`);
        }
        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};