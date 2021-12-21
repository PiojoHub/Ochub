const keepAlive = require("./server");
const Discord = require("discord.js");
const client = new Discord.Client();
require('dotenv').config();
 
const fs = require('fs');

const db = require('megadb')
 const prefix_db = new db.crearDB('prefix')

client.snipes = new Map()
client.imagesnipe = new Map()
//HANDLER
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}

function presence(){
  client.user.setPresence({
      status: "dnd",
      activity: {
        name: "CpHub.com | -help",
        type: "WATCHING"
      }      
  })
}   

client.on('message', async message => {

  let prefix;

  if(prefix_db.tiene(message.guild.id)){
    prefix = await prefix_db.obtener(message.guild.id)
  } else {
    prefix = '-'
  }

 if(!message.content.startsWith(prefix)) return;
 if(message.author.bot) return;

let user = message.mentions.members.first() || message.member;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

let cmd = client.commands.find((c) => c.name === command || c.alias &&
c.alias.includes(command));
 if(cmd){
   cmd.execute(client, message, args)}

});

client.on("ready", () => {
    console.log("Estoy listo!");
     presence();

 });
 
 client.on('messageDelete', message => {
   client.snipes.set(message.channel.id, )
 })

 client.on('messageDelete', message => {
   client.imagesnipe.set(message.channel.id, )
 })


 client.on('messageDelete', message => {
  client.imagesnipe.set(message.channel.id, {
        content: message.content,
        author: message.author.tag,
        member: message.member,
        image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })
 });
 
 client.on("messageDelete", (message) => {
    client.snipes.set(message.channel.id, {
        content: message.content,
        author: message.author.tag,
        member: message.member,
        image: message.attachments.first() ? message.attachments.first().proxyURL : null
    })
});

client.on("messageDelete", (message, channel) => {
  const mensaje = message.content;
  const canal = message.guild.channels.cache.find(c => c.id === '921217679581392966')
  const embed = new Discord.MessageEmbed()
  .setTitle('Contenido.')
  .setAuthor("Mensaje Eliminado.")
  .setDescription(`${mensaje} | ${message.channel}`)
  .setFooter(message.author.tag, message.member.user.avatarURL({dynamic: true}))
  .setColor('CC0000')
  .setTimestamp()
  canal.send(embed)
});

client.on("messageUpdate", (message, channel) => {
  const mensaje = message.content;
  const canal = message.guild.channels.cache.find(c => c.id === '921217679581392966')
  const embed = new Discord.MessageEmbed()
  .setTitle('Contenido.')
  .setAuthor("Mensaje Editado.")
  .setDescription(`${mensaje} | ${message.channel}`)
  .setFooter(message.author.tag, message.member.user.avatarURL({dynamic: true}))
  .setColor('CC0000')
  .setTimestamp()
  canal.send(embed)
});


 client.on('message', async (message) =>{
  
  let prefix = '-'

  if(message.author.bot) return;

  if(!message.content.startsWith(prefix)) return;

  let usuario = message.mentions.members.first() || message.author
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase();
  
  if(command === 'como'){
    message.channel.send('VERGA !JA! pinche pendejo.')
  }
 
 });
 
client.on("message", (message) => {
   if(message.content.startsWith("como")) {
     message.channel.send("VERGA ¡JA! Pinche pendejo.");
   }
 
 });

client.on("message", (message) => {
   if(message.content.startsWith("Cp")) {
     message.channel.send("Puto pedofilo, de seguro te violan en tu casa.");
   }
 
 });

client.on("message", (message) => {
   if(message.content.startsWith("cp")) {
     message.channel.send("Puto pedofilo, de seguro te violan en tu casa.");
   }
 
 });

client.on("message", (message) => {
   if(message.content.startsWith("Ez")) {
     message.channel.send("izzi tu gefa, pendejo.");
   }
 
 });

client.on("message", (message) => {
   if(message.content.startsWith("ez")) {
     message.channel.send("izzi tu gefa, pendejo.");
   }
 
 });

client.on("message", (message) => {
   if(message.content.startsWith("que")) {
     message.channel.send("so");
   }
 
 });

client.on("message", (message) => {
   if(message.content.startsWith("Que")) {
     message.channel.send("so");
   }
 
 });
 
client.on("message", (message) => {
   if(message.content.startsWith("QUE")) {
     message.channel.send("so");
   }
 
 });

client.on("message", (message) => {
   if(message.content.startsWith("prefix")) {
     message.channel.send("El prefix es -");
   }
 
 });

client.on("message", (message) => {
   if(message.content.startsWith("EZ")) {
     message.channel.send("IZZI tu gefa, pendejo.");
   }
 
 });

const { Client, MessageEmbed  } = require("discord.js");

client.on("message", message =>{
 if(message.content === ("-reglas")){
  const embed = new MessageEmbed()
  .setTitle ("**Reglas del servidor.**")
  .setImage('https://media.discordapp.net/attachments/877354204291809321/904826197983264798/ezgif-6-e14b3723bb5b.gif')
  .setColor("CC0000")
  .setDescription ("**➡ Si incumples alguna de estas normas seras penalizado.** \n\ **-----** \n\ ** 𝗡𝗼 𝗵𝗮𝗰𝗲𝗿 𝘀𝗽𝗮𝗺 ** \n\ **-----** \n\ **𝗡𝗼 𝘀𝗲𝗿 𝘁𝗮𝗻 𝘁𝗼𝘅𝗶𝗰𝗼 (𝗮 𝗺𝗲𝗻𝗼𝘀 𝗾𝘂𝗲 𝘀𝗲 𝗹𝗼 𝗺𝗲𝗿𝗲𝘇𝗰𝗮 𝗫𝗗)** \n\ **-----** \n\ **𝗛𝗮𝗰𝗲𝗿 𝗰𝗮𝘀𝗼 𝗮 𝗹𝗮𝘀 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗱𝗲𝗹 𝗺𝗼𝗱 \n\ **-----** \n\ **𝗡𝗼 𝗰𝗽 (𝘆𝗮 𝗾𝘂𝗲 𝗻𝗼𝘀 𝘁𝘂𝗺𝗯𝗮𝗻 𝗲𝗹 𝘀𝗲𝗿𝘃𝗲𝗿)** \n\ **-----**\n\ **𝗡𝗼 𝗺𝘂𝗰𝗵𝗼 𝗴𝗼𝗿𝗲 (𝗽𝗼𝗿 𝗹𝗮 𝗺𝗶𝘀𝗺𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶𝗼́𝗻 𝗾𝘂𝗲 𝗹𝗮 𝗱𝗲 𝗰𝗽)** \n\ ----- \n\ **𝗡𝗼 𝘀𝗲𝗿 𝘁𝗮𝗻 𝗰𝗵𝘂𝗽𝗮𝗽𝗶𝗷𝗮 𝗰𝗿𝗲𝘆𝗲́𝗻𝗱𝗼𝘀𝗲 𝘂𝗻 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗷𝗲 𝟮𝗗** \n\ ----- \n\ **𝗡𝗼 𝗮𝗯𝘂𝘀𝗮𝗿 𝗱𝗲 𝘁𝘂 𝗿𝗼𝗹 \n\ ----- \n\ **𝗡𝗼 𝗺𝗮𝗻𝗱𝗲𝘀 𝗽𝗼𝗿𝗻𝗼 𝗳𝘂𝗲𝗿𝗮 𝗱𝗲𝗹 𝗰𝗮𝗻𝗮𝗹 𝗻𝘀𝗳𝘄 \n\ ** 𝗙𝗮𝗹𝘁𝗮𝗿 𝗲𝗹 𝗿𝗲𝘀𝗽𝗲𝘁𝗼 𝗮 𝗼𝘁𝗿𝗼𝘀 𝘂𝘀𝘂𝗮𝗿𝗶𝗼𝘀 𝗼 𝗲𝗹 𝗦𝘁𝗮𝗳𝗳, 𝗮𝘀𝗶́ 𝗰𝗼𝗺𝗼 𝗲𝗹 𝘂𝘀𝗼 𝗿𝗲𝗽𝗲𝘁𝗶𝗱𝗼 𝗱𝗲 𝗽𝗮𝗹𝗮𝗯𝗿𝗮𝘀 𝗺𝗮𝗹𝘀𝗼𝗻𝗮𝗻𝘁𝗲𝘀 \n\ ----- \n\ ** 𝗡𝗼 𝘀𝗲𝗿 𝘁𝗮𝗻 𝘀𝗶𝗺𝗽 (𝗦𝗶 𝗾𝘂𝗶𝗲𝗿𝗲𝘀 𝘀𝗲𝗿 𝘀𝗶𝗺𝗽 𝗵𝗮𝘇𝗹𝗼 𝗽𝗼𝗿 𝗗𝗠, 𝗽𝗲𝗻𝗱𝗲𝗷𝗼.)** \n\ **------**  \n\ Los tipos de penalización son: mute, kick y ban. Gracias por leer! siguete haciendote pendejo Bv.")
  message.channel.send(embed);
   }
});


client.on("message", message =>{
 if(message.content === ("-logo")){
  const embed = new MessageEmbed()
  .setTitle ("")
  .setImage('https://media.discordapp.net/attachments/877354204291809321/904826197983264798/ezgif-6-e14b3723bb5b.gif')
  .setColor("CC0000")
.setDescription ("")
 .setTimestamp()
 .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }) ); 
  message.channel.send(embed);
   }
});


client.on("message", message =>{
 if(message.content === ("-troste")){
  const embed = new MessageEmbed()
  .setTitle ("")
  .setImage('https://media.discordapp.net/attachments/888616802073079880/899831077852557312/image0.jpg?width=243&height=432')
  .setColor("CC0000")
.setDescription ("")
 .setTimestamp()
 .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }) ); 
  message.channel.send(embed);
   }
});


client.on("message", message =>{
 if(message.content === ("-bella")){
  const embed = new MessageEmbed()
  .setTitle ("")
  .setImage('https://media.discordapp.net/attachments/888616802073079880/906236937902391377/image0.png')
  .setColor("CC0000")
.setDescription ("")
  .setTimestamp()
  .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }) );
  message.channel.send(embed);
   }
});


client.on("message", message =>{
 if(message.content === ("-economia")){
  const embed = new MessageEmbed()
  .setTitle ("**𝑬𝒄𝒐𝒏𝒐𝒎𝒊𝒂...**")
  .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
  .setImage('')
  .setColor("CC0000")
.setDescription ("**Comandos...** \n\ °𝒃𝒂𝒍 𝑬𝒔 𝒑𝒂𝒓𝒂 𝒗𝒆𝒓 𝒄𝒖𝒂𝒏𝒕𝒐 𝒅𝒊𝒏𝒆𝒓𝒐 𝒕𝒊𝒆𝒏𝒆𝒔. \n\ °𝒓𝒐𝒃 𝒆𝒔 𝒑𝒂𝒓𝒂 𝒓𝒐𝒃𝒂𝒓𝒍𝒆 𝒆𝒍 𝒅𝒊𝒏𝒆𝒓𝒐 𝒂 𝒂𝒍𝒈𝒖𝒊𝒆𝒏 \n\ °𝒄𝒓𝒊𝒎𝒆 𝒆𝒔 𝒑𝒂𝒓𝒂 𝒓𝒐𝒃𝒂𝒓 𝒅𝒊𝒏𝒆𝒓𝒐. \n\ °𝒘𝒐𝒓𝒌 𝒑𝒂𝒓𝒂 𝒄𝒐𝒏𝒔𝒆𝒈𝒖𝒊𝒓 𝒅𝒊𝒏𝒆𝒓𝒐. \n\ °𝒅𝒆𝒑 𝒂𝒍𝒍 𝒑𝒂𝒓𝒂 𝒅𝒆𝒑𝒐𝒔𝒊𝒕𝒂𝒓 𝒅𝒊𝒏𝒆𝒓𝒐. \n\ °𝒘𝒊𝒕𝒉𝒅𝒓𝒂𝒘 𝒂𝒍𝒍 𝒑𝒂𝒓𝒂 𝒓𝒆𝒕𝒊𝒓𝒂𝒓 𝒕𝒐𝒅𝒐 𝒆𝒍 𝒅𝒊𝒏𝒆𝒓𝒐 𝒅𝒆 𝒕𝒖 𝒃𝒂𝒏𝒄𝒐. \n\ °𝒈𝒊𝒗𝒆-𝒎𝒐𝒏𝒆𝒚 𝒑𝒂𝒓𝒂 𝒅𝒂𝒓𝒍𝒆 𝒆𝒍 𝒅𝒊𝒏𝒆𝒓𝒐 𝒂 𝒂𝒍𝒈𝒖𝒊𝒆𝒏. \n\ °𝒖𝒔𝒆-𝒊𝒕𝒆𝒎 𝒑𝒂𝒓𝒂 𝒂𝒈𝒂𝒓𝒓𝒂𝒓 𝒆𝒍 𝒐𝒃𝒋𝒆𝒕𝒐 𝒒𝒖𝒆 𝒄𝒐𝒎𝒑𝒓𝒂𝒔𝒕𝒆. \n\ \n\ **𝑹𝒐𝒍𝒆𝒔...** \n\ 𝓢𝓪𝓷𝓽𝓪 🎅 2000 \n\ 𝑹𝒐𝒅𝒐𝒍𝒇𝒐 𝒆𝒍 𝒑𝒆𝒏𝒅𝒆𝒋𝒐 🦌 1000 \n\ 𝑴𝒖𝒏̃𝒆𝒄𝒐 𝒅𝒆 𝒋𝒆𝒏𝒈𝒊𝒃𝒓𝒆 🎄 500 \n\ 𝓥𝓲𝓹 6,000 \n\ 𝑳𝒂 𝒑𝒊𝒋𝒂 𝒎𝒂𝒔 𝒈𝒓𝒂𝒏𝒅𝒆 𝒅𝒆𝒍 𝒎𝒖𝒏𝒅𝒐 1,000,0000,000 \n\ \n\ **𝑷𝒓𝒆𝒇𝒊𝒙...** \n\ 𝑬𝒍 𝒑𝒓𝒆𝒇𝒊𝒙 𝒆𝒔 $ ")
  .setTimestamp()
  .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }) );
  message.channel.send(embed);
   }
});


client.on('guildMemberAdd', (member) => {

  if(member.guild.id === '813982743507238933'){

  const embed = new Discord.MessageEmbed()

  .setAuthor('Oc-Hub | Welcome! 💀')
  .setTitle(`Hello **${member.user.username}**, welcome to PiojoHub.`)
  .setDescription(`Go through <#867772379588460574> to avoid a ban ... do not forget to go through <#870437629403988058>, chinga tu madre si eres fan de daslol.`)
  .setColor('CC0000')
  .setThumbnail(member.user.displayAvatarURL( {format: 'png', dynamic: 'true'} ))
  .setImage("")
  .setTimestamp()

  client.channels.cache.get('867773029764038686').send(embed)
 }
})

 
const mySecret = process.env['TOKEN']
 client.login(mySecret);
 keepAlive()