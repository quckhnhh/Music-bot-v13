const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging....`);
        const embed = new MessageEmbed()
        .setTitle('🏓  |  Pong!')
        .addField(`Độ trễ bot:`, `\`${Math.floor(msg.createdTimestamp - message.createdTimestamp)} ms\``)
        .addField('Độ trễ api:', `\`${client.ws.ping} ms\``)
        message.channel.send({ embeds: [embed]}).then(msg.delete())
    },
};