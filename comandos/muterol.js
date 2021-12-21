const Discord = require('discord.js');
const db = require('megadb')
const muterol = new db.crearDB("muterol")

module.exports = {
  name: "muterol",
  alias: [],

execute (client, message, args){


 
 var perms = message.member.hasPermission("ADMINISTRATOR")
 if(!perms) return message.channel.send("No tienes los permisos para usar este comando...")

 let rol = message.mentions.roles.first();
 if(!rol) return message.channel.send("Debes mencionar un rol...")

 muterol.establecer(message.guild.id, rol.id)

 message.channel.send(`Se ah establecido el rol **${rol.name}** como rol para mutear.`)


 }

}