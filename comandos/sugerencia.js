const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const cosa = new db.crearDB('canalsugerencias')

module.exports = {
  name: "sugerencia",
  alias: [],

async execute (client, message, args){

  const canal = await cosa.obtener(`${message.guild.id}`, `${message.channel.id}`)
  const canalsugerencia = client.channels.cache.get(canal)

  if(!cosa.tiene(`${message.guild.id}`, `${message.channel.id}`)){
    message.channel.send("Este servidor no tiene ni un canal establecido...")

    return;
  }

  const sugerencia = args.join(" ")
  if(!sugerencia) return message.channel.send("Debes decir que quieres sugerir...")

  const embed = new Discord.MessageEmbed()

  .setTitle("Ha llegado una nueva sugerencia!")
  .setDescription(`${sugerencia}`)
  .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }) )
  .setTimestamp()
  .setColor("CC0000")

  const embedbueno = new Discord.MessageEmbed()

  .setTitle("Todo ha salido bien!")
  .setDescription("La sugerencia fue enviada al canal establecido.")
  .setColor("CC0000")

  message.channel.send(embedbueno)

  canalsugerencia.send(embed).then(async msg => {
    await msg.react('🤣');
    await msg.react('👍')
  })


 }

}