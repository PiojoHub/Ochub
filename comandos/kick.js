const Discord = require('discord.js');

module.exports = {
  name: "kick",
  alias: [],

execute (client, message, args){

  if(!message.member.hasPermission("KICK_MEMBERS")){
      return message.channel.send("No tienes los permisos para usar este comando...");
    }

    let user = message.mentions.members.first();
    if(!user){
      return message.channel.send("No hay un usuario mencionado.");      
    }

    let razon = message.content.split('"');
    razon = razon[1];
    if(razon == undefined){
      return message.channel.send("No hay razon para hacer el kick.");
    }

    if(user.id === message.author.id) {
return message.channel.send("No puedes kickearte a ti mismo...") 
}

if(user.id === client.user.id) {
return message.channel.send("No lo hare, pinche pendejo.")
}

    try{
      user.kick(razon);

    const embed = new Discord.MessageEmbed()

  .setTitle("Oc-Hub | Kick command 💀")
  .setDescription(`El usuario **${user}** fue kickeado por la razon: *${razon}* \nModerador: **${message.author}**`)
  .setTimestamp()
  .setColor("CC0000")

      message.channel.send(embed);
    }catch{
      message.channel.send("Tengo problemas X.");
    }
  }
}
