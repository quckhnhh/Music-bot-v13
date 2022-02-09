const player = require("../../client/player");

module.exports = {
    name: "resume",
    description: "Tiếp tục phát bài hát hiện tại",
    run: async (client, interaction, args) => {
        const queue = player.getQueue(interaction.guildId);

        queue.setPaused(false);

        return interaction.followUp({ content: "Đã tiếp tục phát nhạc!" });
    },
};
