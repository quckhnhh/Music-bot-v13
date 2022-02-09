const { QueryType } = require("discord-player");
const player = require("../../client/player");

module.exports = {
    name: "play",
    description: "Phát bài hát",
    options: [
        {
            name: "songtitle",
            description: "title of the song",
            type: "STRING",
            required: true,
        },
    ],
    run: async (client, interaction, args) => {
        const songTitle = interaction.options.getString("songtitle");

        if (!interaction.member.voice.channel)
            return interaction.followUp({
                content: "Bạn chưa vào kênh thoại!",
            });

        const res = await player.search(songTitle, {
            requestedBy: interaction.user,
            searchEngine: QueryType.AUTO
        });
        if (!res || !res.tracks.length) return void interaction.followUp({ content: "Không tìm thấy kêt quả !!" });

        const queue = await player.createQueue(interaction.guild, {
            metadata: interaction.channel,
        });

        if (!queue.connection)
            await queue.connect(interaction.member.voice.channel);

        interaction.followUp({ content: `<a:8839pepepiano:887262241852915742> <a:6368pepeguitar:887262241823522866> <a:7958pepedrums:887262241928396810> ` });

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};
