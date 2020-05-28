const Discord = require("discord.js");
const client = new Discord.Client();
const { token, prefix } = require("./config.json");

client.on("ready", () => {
  console.log("Connected as " + client.user.tag);

  client.user.setActivity("With Javascript");

  client.guilds.cache.array().forEach((guild) => {
    console.log(guild.name);
  });
});

client.login(token);
