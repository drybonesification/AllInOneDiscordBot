const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("With Javascript")

    client.guilds.cache.array().forEach((guild) => {
        console.log(guild.name)
    })
})

client.login("NTQyNTcwMzM3NDA2Mjg3ODkw.Xry0nQ.SfIfXl6V1OcWESf8RHkTmLCPeB8")
