const player = require("../../client/player");

module.exports = {
    name: "volume",

    run: async (client, message, args) => {
        const queue = player.getQueue(message.guildId);
        if (!queue?.playing)
            return message.channel.send({
                content: "Không có bài hát nào đang phát.",
            });
        const vol = parseInt(args[0]);
        if (!vol)
            return message.channel.send({
                content: `Volume hiện tại là: \`${queue.volume}%\``,
            });

        if (vol < 0 || vol > 100)
            return message.channel.send({
                content: "Hãy nhập số từ 1 -> 100 .",
            });

        queue.setVolume(vol);

        return message.channel.send({
            content: `Volume: \`${vol}%\``,
        });
    },
};