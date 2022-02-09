const player = require("../../client/player");

module.exports = {
    name: "pause",
    description: "Tạm dừng bài hát đang phát!",
    run: async (client, interaction, args) => {
        const queue = player.getQueue(interaction.guildId);

        queue.setPaused(true);

        return interaction.followUp({ content: "Đã tạm dừng phát nhạc!" });
    },
};
