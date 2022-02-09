const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    description: "returns websocket ping",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const msg = await interaction.followUp(`🏓 Pinging....`);
        const embed = new MessageEmbed()
        .setTitle('🏓  |  Pong!')
        .addField(`Độ trễ bot:`, `\`${Math.floor(msg.createdTimestamp - interaction.createdTimestamp)} ms\``)
        .addField('Độ trễ api:', `\`${client.ws.ping} ms\``)
        interaction.followUp({ embeds: [embed] }).then(msg.delete())
    },
};
