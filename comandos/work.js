const Discord = require('discord.js');
const db = require('megadb')
const dinero = new db.crearDB('dinero')

module.exports = {
  name: "work",
  alias: ["w"],

execute (client, message, args){

 const user = message.author;

 if(!dinero.tiene(`${user.id}`))
 dinero.establecer(`${user.id}`, 0)

 let random = Math.floor(Math.random() * 175) + 100

 let trabajo = ["policia", "profesor", "programador"]
 let randomtrabajo = trabajo[Math.floor(Math.random() * trabajo.length)]

 dinero.sumar(`${user.id}`, random)

 const embed = new Discord.MessageEmbed()

 .setAuthor("Trabajo")
 .setDescription(`El usuario ${user} ah trabajado de **${randomtrabajo}** y ganó **${random}$**`)
 .setColor("CC0000")
 .setTimestamp()

 message.channel.send(embed)






 }

}