const player = require("../../client/player");

module.exports = {
    name: "volume",
    description: "change or check the volume of the current song",
    options: [
        {
            name: "percentage",
            description: "percentage to change the volume to",
            type: "INTEGER",
            required: false,
        },
    ],
    run: async (client, interaction, args) => {
        const volumePercentage = interaction.options.getInteger("percentage");
        const queue = player.getQueue(interaction.guildId);
        if (!queue?.playing)
            return interaction.followUp({
                content: "Không có bài hát nào đang phát.",
            });

        if (!volumePercentage)
            return interaction.followUp({
                content: `Volume hiện tại là: \`${queue.volume}%\``,
            });

        if (volumePercentage < 0 || volumePercentage > 100)
            return interaction.followUp({
                content: "Hãy nhập số từ 1 -> 100 .",
            });

        queue.setVolume(volumePercentage);

        return interaction.followUp({
            content: `Volume: \`${volumePercentage}%\``,
        });
    },
};
