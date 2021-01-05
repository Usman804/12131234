
const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "ping",
    description: "Shows Bot Ping",
    usage: "ping",
    aliases: [],
  },

  run: async (client, message, args) => {
        
    const embev = new MessageEmbed()
    .setTitle('Bot Pings')
    
    .setDescription(`The Bot Ping Are:

    ❤ ${Math.round(client.ping)}ms
    `)
    .setColor('#59b6eb')
    message.channel.send(embev);
    }
};
