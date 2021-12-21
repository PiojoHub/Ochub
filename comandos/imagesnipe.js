const Discord = require("discord.js")
const { Client, Message, MessageEmbed } = require('discord.js');

 module.exports = {
    name: 'imagesnipe',
    //
execute (client, message, args){

  const channel = message.mentions.channels.first() || message.channel;
  
    const msg = client.imagesnipe.get(message.channel.id)

    if(!msg){
   const embed = new Discord.MessageEmbed()
   .setDescription("❌No image has been deleted.")
   .setColor('CC0000')
   return message.channel.send(embed)
  } else {
    const embed = new Discord.MessageEmbed()

    .setAuthor("Deleted Image.")
    .setTitle('Content')
    .setImage(msg.image)
    .setColor("CC0000")
    .setFooter(msg.author, msg.member.user.displayAvatarURL({dynamic: true}))
    .setTimestamp();

    message.channel.send(embed)

   }
  }
}