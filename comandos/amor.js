const Discord = require('discord.js');

module.exports = {
  name: "amor",
  alias: ["ship"],

execute (client, message, args){



 let user = message.mentions.users.first()
 if(!user) return message.channel.send("Debes mencionar a alguien...")

 const embed = new Discord.MessageEmbed()

 .setTitle("Oc-Hub | ShipComand 🐸")
 .setDescription(`**${message.author.username}** y **${user.username}** se quieren un 2%`)
 .setColor("CC0000")
 .setThumbnail('https://media.discordapp.net/attachments/920535864914898974/920961032015458304/logo_3.png')
 .setTimestamp()
 .setFooter(`Solicitado por: ${message.author.username}`)
 .setImage("https://media.discordapp.net/attachments/914978259387711488/915862908230066196/739c80d1-1504-49c2-ab3e-7bc447bcf514.gif")

 const embed1 = new Discord.MessageEmbed()

 .setTitle("Oc-Hub | ShipComand 🐸")
 .setDescription(`**${message.author.username}** y **${user.username}** se quieren un 16%`)
 .setColor("CC0000")
 .setThumbnail('https://media.discordapp.net/attachments/920535864914898974/920961032015458304/logo_3.png')
 .setTimestamp()
 .setFooter(`Solicitado por: ${message.author.username}`)
 .setImage("https://media.discordapp.net/attachments/914978259387711488/915862908230066196/739c80d1-1504-49c2-ab3e-7bc447bcf514.gif")

 const embed2 = new Discord.MessageEmbed()

 .setTitle("Oc-Hub | ShipComand 🐸")
 .setDescription(`**${message.author.username}** y **${user.username}** se quieren un 55%`)
 .setColor("CC0000")
 .setThumbnail('https://media.discordapp.net/attachments/920535864914898974/920961032015458304/logo_3.png')
 .setTimestamp()
 .setFooter(`Solicitado por: ${message.author.username}`)
 .setImage("https://media.discordapp.net/attachments/914978259387711488/915862908230066196/739c80d1-1504-49c2-ab3e-7bc447bcf514.gif")

 const embed3 = new Discord.MessageEmbed()

 .setTitle("Oc-Hub | ShipComand 🐸")
 .setDescription(`**${message.author.username}** y **${user.username}** se quieren un 79%`)
 .setColor("CC0000")
 .setThumbnail('https://media.discordapp.net/attachments/920535864914898974/920961032015458304/logo_3.png')
 .setTimestamp()
 .setFooter(`Solicitado por: ${message.author.username}`)
 .setImage("https://media.discordapp.net/attachments/914978259387711488/915862908230066196/739c80d1-1504-49c2-ab3e-7bc447bcf514.gif")

 const embed4 = new Discord.MessageEmbed()

 .setTitle("Oc-Hub | ShipComand 🐸")
 .setDescription(`**${message.author.username}** y **${user.username}** se quieren un 87%`)
 .setColor("CC0000")
 .setThumbnail('https://media.discordapp.net/attachments/920535864914898974/920961032015458304/logo_3.png')
 .setTimestamp()
 .setFooter(`Solicitado por: ${message.author.username}`)
 .setImage("https://media.discordapp.net/attachments/914978259387711488/915862908230066196/739c80d1-1504-49c2-ab3e-7bc447bcf514.gif")

 const embed5 = new Discord.MessageEmbed()

 .setTitle("Oc-Hub | ShipComand 🐸")
 .setDescription(`**${message.author.username}** y **${user.username}** se quieren un 93%`)
 .setColor("CC0000")
 .setThumbnail('https://media.discordapp.net/attachments/920535864914898974/920961032015458304/logo_3.png')
 .setTimestamp()
 .setFooter(`Solicitado por: ${message.author.username}`)
 .setImage("https://media.discordapp.net/attachments/914978259387711488/915862908230066196/739c80d1-1504-49c2-ab3e-7bc447bcf514.gif")

 const embed6 = new Discord.MessageEmbed()

 .setTitle("Oc-Hub | ShipComand 🐸")
 .setDescription(`**${message.author.username}** y **${user.username}** se quieren un 100%`)
 .setColor("CC0000")
 .setThumbnail('https://media.discordapp.net/attachments/920535864914898974/920961032015458304/logo_3.png')
 .setTimestamp()
 .setFooter(`Solicitado por: ${message.author.username}`)
 .setImage("https://media.discordapp.net/attachments/914978259387711488/915862908230066196/739c80d1-1504-49c2-ab3e-7bc447bcf514.gif")

 const embeds = [embed, embed1, embed2, embed3, embed4, embed5, embed6]

 let embedfinal = embeds[Math.floor(Math.random() * embeds.length)]

 message.channel.send(embedfinal)



 }

}