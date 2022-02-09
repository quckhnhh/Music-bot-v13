const { Client, Collection } = require("discord.js");

const client = new Client({
    intents: 32767,
});

client.on("ready", () => {
    console.log(`${client.user.tag} ✔`);
    client.user.setActivity({ name: ' | quckhnh ', type: "LISTENING" })
});

client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

require("./handler")(client);

client.login(client.config.token);

module.exports = client;