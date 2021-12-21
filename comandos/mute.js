const Discord = require('discord.js');
const ms = require('ms')
const db = require('megadb')
const muterol = new db.crearDB("muterol")

module.exports = {
  name: "mute",
  alias: [],

async execute (client, message, args){


 var perms = message.member.hasPermission("MANEGE_ROLES")
 if(!perms) return message.channel.send("No tienes los permisos para usar este comando...")

 let time = args[1]
 if(!time) return message.channel.send("Debes decir un tiempo!")
 let timer = ms(time)

 let mencionado = message.mentions.members.first()
 if(!mencionado) return message.channel.send("Debes mencionar a alguien!")

 var razon = args[2]
 if(!razon){
   razon = 'No especificado.'
 }

 if(!muterol.tiene(message.guild.id)) return message.channel.send("Este servidor no tiene ningun rol para mutear...")

 let rol = await muterol.obtener(message.guild.id)

 if(mencionado.roles.cache.has(rol)) return message.channel.send("Este usuario ya esta muteado...")

 mencionado.roles.add(rol)

 const embed = new Discord.MessageEmbed()

  .setTitle("Oc-Hub | Mute Command 🐸")
  .setDescription(`El ususario **${mencionado}** ha sido muteado durante **${time}** por **${razon}**`)
  .setTimestamp()
  .setColor("CC0000")
  .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }) )

 message.channel.send(embed)

 await setTimeout(async function() {

   await mencionado.roles.remove(rol)

   await message.channel.send("Se acabo el mute!").catch(error => {
     message.channel.send(`Hubo un error inesperado! **${error}**`)
   })
 }, timer)




 }

}