const Discord = require('discord.js');

module.exports = {
  name: "serverinfo",
  alias: ["server"],

execute (client, message, args){

 const embed = new Discord.MessageEmbed() 

 .setTitle("Oc-Hub | ServerInfo command 💀")
 .setThumbnail(message.guild.iconURL())
 .setAuthor(message.guild.name, message.guild.iconURL())
 .setTimestamp()
 .setColor('CC0000')
 .addField('**ID:**', message.guild.id)
 .addField('**Dia de creación**', message.guild.joinedAt)
 .addField('**Regíon**', message.guild.region)
 .addField('**Dueño**', message.guild.owner)
 .addField('**Miembros**', message.guild.memberCount, true)
 .addField('**Bots**', message.guild.members.cache.filter(m => m.user.bot).size)
 .addField('**Emojis**', message.guild.emojis.cache.size)
 .addField('**Boosts**', message.guild.premiumSubscriptionCount.toString())
 .addField('**Nivel de verificación**', message.guild.verificationLevel)
 .addField('**Roles**', message.guild.roles.cache.size, true)


 message.channel.send(embed)




 }

}