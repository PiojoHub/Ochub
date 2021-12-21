const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "avatar",
  alias: [],

execute (client, message, args){

  let usuario = message.mentions.members.first() || message.member;

  let embedavatar = new Discord.MessageEmbed()
  
  .setTitle(`**${usuario.user.username}**, tu avatar:`)
  .setImage(usuario.user.displayAvatarURL({ size: 1024, dynamic: true }))
  .setFooter(`Solicitado por: ${message.author.username}`)
  .setAuthor("🐸 Avatar Viewer")
  .setColor("CC0000")
  .setTimestamp()
  .setThumbnail("https://media.discordapp.net/attachments/875925325299716107/916202137929797692/logo_2.png")
  .addField("Full Image:", "[Click Aqui](" + usuario.user.displayAvatarURL() + ")")

  message.channel.send(embedavatar)

 }

}