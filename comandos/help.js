const Discord = require('discord.js');

module.exports = {
  name: "help",
  alias: ["cmds"],

execute (client, message, args){

 const embedcargando = new Discord.MessageEmbed()

 .setDescription('Espera a que cargen las reacciones...')
 .setColor("CC0000")

 const embedprincipal = new Discord.MessageEmbed()

 .setTitle ("**🔔 | AYUDA | 🔔**")
  .setThumbnail('https://media.discordapp.net/attachments/868202261757722745/916623391761510420/logo_3.png')
  .setImage('')
  .setColor("CC0000")
.setDescription ("**Alo, si no encuentras tu respuesta comunicarte con algun mod...** \n\ \n\ **Comandos:** <:nashe:853068863414992916> \n\ \n\ **Rangos:** <:GG_EZ:853067099155726386> \n\ \n\ **Musíca:** .𝘩𝘦𝘭𝘱 \n\ \n\ **Soporte:** <:1f6e0:916108200292528168> \n\ \n\ **Moderador:** <:1f575:916110418127237160>")

 const embed1 = new Discord.MessageEmbed()

  .setTitle ("**Comandos del Ochub**")
  .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
  .setImage('')
  .setColor("CC0000")
.setDescription ("**Comandos:** -𝒓𝒆𝒈𝒍𝒂𝒔 -𝒆𝒄𝒐𝒏𝒐𝒎𝒊𝒂 -𝒔𝒏𝒊𝒑𝒆 -𝒔𝒂𝒚 -𝒔𝒖𝒈𝒆𝒓𝒆𝒏𝒄𝒊𝒂 -𝒂𝒗𝒂𝒕𝒂𝒓 -𝒂𝒎𝒐𝒓 -𝒔𝒆𝒓𝒗𝒆𝒓𝒊𝒏𝒇𝒐 -𝒖𝒔𝒆𝒓𝒊𝒏𝒇𝒐 -𝒘𝒂𝒔𝒕𝒆𝒅 -𝒈𝒂𝒚 -𝒊𝒎𝒂𝒈𝒆𝒔𝒏𝒊𝒑𝒆 -𝒔𝒂𝒅 \n\ \n\ **Comandos extras:** -𝒃𝒆𝒍𝒍𝒂 -𝒍𝒐𝒈𝒐 -𝒕𝒓𝒐𝒔𝒕𝒆")

 const embed2 = new Discord.MessageEmbed()

  .setTitle ("")
  .setThumbnail('')
  .setImage('https://i.pinimg.com/originals/e1/3c/f5/e13cf5d66296689597139a426e348f12.gif')
  .setColor("CC0000")
  .setDescription ("PRÓXIMAMENTE...")

  const embed3 = new Discord.MessageEmbed()

  .setTitle ("**Estos son los rangos del server.**")
  .setColor("CC0000")
  .setDescription ("**➡ A continuación los requisitos para obtener cada rol.** \n\ **------** \n\ **°Vip: Invitar a 4 personas mínimo, ser activo y crear 1 emoji. También lo puedes conseguir en ➜『💰』𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔** \n\ **°Mod Ser activo, ser nivel 10 como mínimo, invitar a 4 personas como mínimo y estar 2 semanas mínimo en el server. Decir por dm para que quieres este rol y por que deberías tenerlo. (Si eres muy inactivo teniendo este rol te lo quitaremos)** \n\ **°Co owner: Ser activo, ser nivel 20 como mínimo, tener el rol Administrador 1 mes. Invitar a 7 personas y estar en el server como mínimo 1 mes.** \n\ **°Rol para gays: Este es un rol castigo, si haces algo que esta mal o eres bastante chupapija te pondremos este rol.** \n\ **°La pija mas grande del mundo: Este es un rol exclusivo del server, solo se puede conseguir mejorando el server.** \n\ **------** \n\ Si tienes todos los requisitos comunicarte con algun administrador, si abusas de tu rango te lo quitaremos, GRACIAS POR LEER! pendejo ")

  const embed4 = new Discord.MessageEmbed()

  .setTitle ("**Comandos de moderador...**")
  .setThumbnail('https://media.discordapp.net/attachments/868202261757722745/916623391761510420/logo_3.png')
  .setTimestamp()
  .setImage('')
  .setColor("CC0000")
.setDescription ("**Comandos:** -𝒌𝒊𝒄𝒌 -𝒃𝒂𝒏 -𝒘𝒂𝒓𝒏 -𝒄𝒍𝒆𝒂𝒓 -𝒘𝒂𝒓𝒏𝒔 -𝒎𝒖𝒕𝒆 -𝒖𝒏𝒃𝒂𝒏 -𝒔𝒆𝒕𝒑𝒓𝒆𝒇𝒊𝒙 -𝒃𝒂𝒄𝒌𝒖𝒑 \n\ \n\ **🔔 | NOTA | 🔔** \n\ \n\ Si abusas de estos comandos seras baneado... Gracias por leer!")
  .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }) )
     
  
 message.channel.send(embedcargando).then(msg => {
   msg.react("853067099155726386")
   msg.react("916110418127237160")
   msg.react("853068863414992916")
   msg.react("916108200292528168").then(m => {
     msg.edit(embedprincipal)
     msg.awaitReactions((reaction, user) => {
       if(message.author.id !== user.id) return;
       if(reaction.emoji.id === '853068863414992916'){
         msg.edit(embed1)
       }
       if(reaction.emoji.id === '916108200292528168'){
         msg.edit(embed2)
       }
       if(reaction.emoji.id === '853067099155726386'){
         msg.edit(embed3)
       }
       if(reaction.emoji.id === '916110418127237160'){
         msg.edit(embed4)
       }
     })
   })
 })





 }

}