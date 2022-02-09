const { Player } = require("discord-player");
const client = require("../index.js");
const { MessageEmbed } = require('discord.js')

const player = new Player(client, {
    ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25,
    },
});

client.player = player;

const methods = ['tắt', 'bật'];

client.player.on('trackStart', (queue, track) => {
    const playEmbed = new MessageEmbed()
    .setTitle('__Đang phát bài__:')
    .setDescription(`***\`${track.title}\`***`)
    .setThumbnail(`${track.thumbnail}`)
    .setColor('#D899F1')
    .addField(`**Loop:**`, `\`${methods[queue.repeatMode]}\``, true)
    .addField(`**Volume:**`, `\`${queue.volume}%\``, true)
    .addField(`**Duration:**`, `\`${track.duration}\``, true)
    .setTimestamp()
    queue.metadata.send({ embeds: [playEmbed] });
});

client.player.on("trackAdd", (queue, track) => {
    const AddEmbed = new MessageEmbed()
    .setTitle('__Đã thêm vào danh sách chờ bài__:')
    .setDescription(`***\`${track.title}\`***`)
    .setThumbnail(`${track.thumbnail}`)
    .setColor('#D899F1')
    .setTimestamp()
    queue.metadata.send({ embeds: [AddEmbed] });
});

client.player.on("tracksAdd", (queue, tracks) => {
    const AddsEmbed = new MessageEmbed()
    .setTitle('__Đã thêm vào danh sách chờ__:')
    .setDescription(`***\`**${tracks.length}** bài hát\`***`)
    .setThumbnail(`${tracks.thumbnail}`)
    .setColor('#D899F1')
    .setTimestamp()
    queue.metadata.send({ embeds: [AddsEmbed] });
})

client.player.on('error', (message,err) => {
    message.channel.send(`Đã xảy ra lỗi.\n${err}`)
});

module.exports = player;
