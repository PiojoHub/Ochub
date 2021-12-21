const { Client, Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
module.exports = {
    name: 'snipe',
    //
execute (client, message, args){
        const msg = client.snipes.get(message.channel.id)
 if(!msg){
   const embed = new Discord.MessageEmbed()
   .setDescription("No hay ni un mensaje eliminado ❌")
   .setColor('CC0000')
   message.channel.send(embed) 
 } else {
   const embed = new Discord.MessageEmbed()
            .setAuthor("Mensaje Eliminado.")
            .setTitle('Contenido')
            .setDescription(msg.content)
            .setFooter(msg.author, msg.member.user.displayAvatarURL({dynamic: true}))
            .setColor('CC0000')
            .setTimestamp()

if(msg.image) embed.setImage(msg.image);

   message.channel.send(embed)

 }


 }
 
}