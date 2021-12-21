const Discord = require('discord.js');
const backup = require('discord-backup');
backup.setStorageFolder(__dirname+"/backups/")

module.exports = {
  name: "backup",
  alias: [],

execute (client, message, args){


 var perms = message.member.hasPermission("ADMINISTRATOR")
 if(!perms) return message.channel.send("No tienes los permisos para usar este comando...")

 const accion = args[0]
 if(!accion) return message.channel.send("Debes decir que vas a hacer!")

 if(accion === 'create'){

   backup.create(message.guild, {
     jsonBeautify: true
   }).then(backupData => { 
     const embed = new Discord.MessageEmbed()
     
     .setTitle("Backup creado.")
     .setDescription(`Para usar el comando escriba -backup load ${backupData.id}`)
     .setColor("CC0000")
     .setFooter("No compartas esta ID con alguien mas!")

     message.author.send(embed)

     const embed2 = new Discord.MessageEmbed()
     .setTitle("Backup creado correctamente!")
     .setDescription("El ID ah sido enviado por DM.")
     .setColor("CC0000")

     message.channel.send(embed2)
   })
 }

 if(accion === 'load'){
   let backupID = args[1]
   if(!backupID) return message.channel.send("Debes decirme el ID del backup!")

   const embedfinal = new Discord.MessageEmbed()
   
   .setTitle("Cargar backup...")
   .setDescription(`:warning: cuando el backup se este cargando se modificara el servidor, si estas seguro reacciona a 👍`)
   .setColor("CC0000")

   backup.fetch(backupID).then(async () => {
     message.channel.send(embedfinal).then(msg => {
       msg.react('👍')

       msg.awaitReactions((reaction, user) => {
         if(message.author.id !== user.id) return;

         if(reaction.emoji.name === '👍'){
           backup.load(backupID, message.guild).then(() => {
             clearGuildBeforeRestore: true,
             backup.remove(backupID)
           }).catch((err) => {
             return message.channel.send("Hubo un error!")
           })
         }
       })
     })
   })
 }


 }

}