const Discord = require('discord.js');

module.exports = {
  name: "say",
  alias: [],

execute (client, message, args){

   if(!message.member.hasPermission("KICK_MEMBERS")){
       return message.channel.send("No tienes permisos para utilizar este comando...");
     }

     let texto = message.content.slice(4);
     if(texto.startsWith(" ")){
       texto = texto.slice(1);
     }

     message.delete()
     message.channel.send(texto);
   }
 }