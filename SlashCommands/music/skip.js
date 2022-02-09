const player = require("../../client/player");

module.exports = {
    name: "skip",
    description: "Bỏ qua bài hát hiện tại",
    run: async (client, interaction, args) => {
        const queue = player.getQueue(interaction.guildId);
        if (!queue?.playing)
            return interaction.followUp({
                content: "Không có bài hát nào đang phát.",
            });

        await queue.skip();

        interaction.followUp({ content: "Đã bỏ qua bài hát hiện tại!" });
    },
};
