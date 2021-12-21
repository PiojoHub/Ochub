const Discord = require('discord.js');
const db = require('megadb')
const warns = new db.crearDB('warns')

module.exports = {
  name: "warn",
  alias: [],

execute (client, message, args){

 var perms = message.member.hasPermission("KICK_MEMBERS")
 if(!perms) return message.channel.send("No tienes permisos para usar este comando...")

 let persona = message.mentions.users.first()
 if(!persona) return message.channel.send("Debes mencionar a alguien...")

 var razon = args.slice(1).join(" ")
 if(!razon){
   razon = 'No especificado.'
 }

 if(!warns.tiene(`${message.guild.id}.${persona.id}`))
 warns.establecer(`${message.guild.id}.${persona.id}`, 0)

 warns.sumar(`${message.guild.id}.${persona.id}`, 1)

 const embed = new Discord.MessageEmbed()

  .setTitle("Oc-Hub | Warn Comand 🐸")
  .setDescription(`El moderador **${message.author.tag}** ah advertido a **${persona.tag}** por **${razon}**`)
  .setTimestamp()
  .setColor("CC0000")

 message.channel.send(embed)

 persona.send(`Has sido advertido en el servidor **${message.guild.name}**, la razón: **${razon}**`)
 

 }

}