const Discord = require('discord.js');

module.exports = {
  name: "userinfo",
  alias: ["info"],

execute (client, message, args){

 

  let estados = {
    "online": "En linea",
    "idle": "Ausente",
    "dnd": "No molestar",
    "offline": "Desconectado/fantasmon"
  };

  const member = message.mentions.members.first() || message.member;

  function formatDate (template, date){
  var tiempo = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(tiempo[i]).join(item)

  }, template)
  }

  const embedinfo = new Discord.MessageEmbed()

  .setColor("CC0000")
  .setDescription(`**Información de ${member}**`)
  .addField(`**Nombre:**`, `**${member.user.tag}**`)
  .addField("**ID:**", `**${member.user.id}**`)
  .addField("**Apodo del ususario:**", `${member.nickname !== null ? `${member.nickname}` : 'ninguno'}`)
  .addField("**Union al servidor:**", formatDate('DD/MM/YYYY, a las HH:mm:ss', member.joinedAt))
  .addField("**Roles:**", member.roles.cache.map(roles => `\`${roles.name}\``).join(', '))
  .addField("**Boost:**", member.premiumSince ? 'ususario booster' : 'Usuario no booster')
  .addField("Estado:", estados[member.user.presence.status])
  .setThumbnail(member.user.displayAvatarURL( {format: 'png', dynamic: 'true'} ))
  .setTimestamp()
  .setFooter(`Solicitado por: ${message.author.username}`)

  message.channel.send(embedinfo)



 }

}