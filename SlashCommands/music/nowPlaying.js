const player = require("../../client/player");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "now-playing",
    description: "Xem  bài hát đang phát",
    run: async (client, interaction, args) => {
        const queue = player.getQueue(interaction.guildId);
        if (!queue?.playing)
            return interaction.followUp({
                content: "Không có bài hát nào đang phát",
            });
        const methods = ['tắt', 'bật'];
        const currentTrack = queue.current;
        const playEmbed = new MessageEmbed()
        .setTitle('__Đang phát bài__:')
        .setDescription(`***\`${currentTrack.title}\`***`)
        .setThumbnail(`${currentTrack.thumbnail}`)
        .setColor('#D899F1')
        .addField(`**Loop:**`, `\`${methods[queue.repeatMode]}\``, true)
        .addField(`**Volume:**`, `\`${queue.volume}%\``, true)
        .addField(`**Duration:**`, `\`${currentTrack.duration}\``, true)
        .setTimestamp()

        return interaction.followUp({
            embeds: [playEmbed],
        });
    },
};
