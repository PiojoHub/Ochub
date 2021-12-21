const Discord = require('discord.js');

module.exports = {
  name: "unban",
  alias: [],

async execute (client, message, args){

 var perms = message.member.hasPermission("BAN_MEMBERS")
 if(!perms) return message.channel.send("No tienes permisos para usar este comando!")

 if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("No tengo los suficientes permisos para ejecutar este comando.")

 let userID = args[0];
 if(!userID) return message.channel.send("Debes escribir una ID!")
 
 const member = await client.users.fetch(userID)

 message.guild.fetchBans().then(bans => {
   if(bans.size === 0) return message.channel.send("El servidor no tiene ah ningun miembro baneado.")

   let bUser = bans.find(b => b.user.id == userID)
   if(!bUser) return message.channel.send("Ese usuario no esta baneado...")

   message.guild.members.unban(bUser.user)
 })

 const embed = new Discord.MessageEmbed()

  .setTitle("Oc-Hub | Unban command 👻")
  .setDescription(`El usuario **${member.username}** fue desbaneado!`)
  .setTimestamp()
  .setColor("CC0000")
  .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }) )

  message.channel.send(embed)


 }

}