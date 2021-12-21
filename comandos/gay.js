const Discord = require('discord.js');
const { Canvas } = require('canvacord')

module.exports = {
  name: "gay",
  alias: [],

async execute (client, message, args){

const user = message.mentions.users.first() || message.author;

const avatar = user.displayAvatarURL({ format : 'png'})

const image = await Canvas.rainbow(avatar)

let imagen = new Discord.MessageAttachment(image, "rainbow.png")

message.channel.send(imagen)




 }

}