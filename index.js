const Discord = require("discord.js");
const client = new Discord.Client();
const { bot_token, prefix, giphy_token } = require("./config.json");

var GphApiClient = require("giphy-js-sdk-core");
client = GphApiClient(giphy_token);

client.on("ready", () => {
  console.log("Connected as " + client.user.tag);

  client.user.setActivity("With Javascript");

  client.guilds.cache.array().forEach((guild) => {
    console.log(guild.name);
  });
});

client.on("message", (message) => {
  if (message.member.hasPermission(["KICK_MEMBERS", "BAN_MEMBERS"])) {
    //   console.log(message.content);
    if (message.content.startsWith(`${prefix}kick`)) {
      // message.channel.send("Test Kick");
      let member = message.mentions.members.first();
      member.kick().then((member) => {
        message.channel.send(
          ":wave:" + member.displayName + " has been kicked"
        );
      });
    }
  }
});

client.login(bot_token);
