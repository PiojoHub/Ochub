const Discord = require('discord.js');

module.exports = {
  name: "ban",
  alias: [],

execute (client, message, args){

  var botperms = message.guild.me.hasPermission("BAN_MEMBERS")
  if(!botperms) return message.channel.send("No tienes permisos para banear miembros...")

  var perms = message.member.hasPermission("BAN_MEMBERS")
  if(!perms) return message.channel.send("No tienes permisos para banear miembros...")
 
  const usuario = message.mentions.members.first()
  if(!usuario) return message.channel.send("Debes mencionar a un usuario...")
  if(usuario.id === message.author.id) return message.channel.send("No te puedes expulsar a ti mismo, pendejo.")

  const razon = args.slice(1).join(' ')
  if(!razon) return message.channel.send("Debes decir una razon para banear a este miembro.")

  usuario.ban({ reason: razon})

  const embed = new Discord.MessageEmbed()

  .setTitle("Oc-Hub | Ban command 💀")
  .setDescription(`Se ha baneado al usuario **${usuario}** correctamente.`)
  .setTimestamp()
  .setColor("CC0000")
  .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }) )

  message.channel.send(embed)


 }

}
