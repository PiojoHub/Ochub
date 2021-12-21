const Discord = require('discord.js');
const anime = require('anime-actions')

module.exports = {
  name: "sad",
  alias: ["triste"],

async execute(client, message, args) {

 try{

   const target = message.mentions.users.first() || message.guild.members.cache.get(args[1]) || message.author;
   const embed = new Discord.MessageEmbed()
   .setTitle(`${target.username} se puso triste :,v`)
   .setImage(await anime.sad())
   .setColor("CC0000")

   message.channel.send(embed)

 } catch(e) { return

 }

 }

}