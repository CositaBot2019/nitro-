const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$"
var adminprefix = '$'


//bc

client.on("message", message => {
    if (message.content.startsWith("$obc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });


//bc online


  var prefix = "$";

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });

client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith("$avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});

client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });

  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('$adminbc')){
if(!message.author.id === '476185102922285066') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

  client.on('message', msg => {
    if(msg.content === '$help')
    msg.reply('Check Your DM :white_check_mark:')
  });
  
  
  client.on("message", message => {
    if (message.content === "$help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help|هيلب

       $obc | لأرسال برود كاست للكل

       $bc  |  لأرسال برود كاست للأونلاين

       $adminbc | برودكاست عادي

       ** `)
   message.author.sendEmbed(embed)
   
   }
   });

var prefix = '$'; //  nitro  هوا امر التشغيل  //Toxic Codes
 
var _0x8b3c=["\x64\x69\x73\x63\x6F\x72\x64\x2E\x6A\x73","\x72\x65\x61\x64\x79","\x53\x74\x61\x72\x74\x65\x64\x20\x62\x6F\x74\x20","\x74\x61\x67","\x75\x73\x65\x72","\x21","\x6C\x6F\x67","\x6F\x6E","\x6D\x65\x73\x73\x61\x67\x65","\x63\x6F\x6E\x74\x65\x6E\x74","\x6E\x69\x74\x72\x6F","\x47\x65\x6E\x65\x72\x61\x74\x69\x6E\x67\x20\x67\x69\x66\x74\x20\x6C\x69\x6E\x6B\x73\x2E\x2E\x2E","\x72\x65\x70\x6C\x79","\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4A\x4B\x4C\x4D\x4E\x4F\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5A\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6A\x6B\x6C\x6D\x6E\x6F\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7A\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x67\x69\x66\x74\x2F","\x72\x61\x6E\x64\x6F\x6D","\x6C\x65\x6E\x67\x74\x68","\x66\x6C\x6F\x6F\x72","\x63\x68\x61\x72\x41\x74","\x70\x75\x73\x68","\x20","\x6A\x6F\x69\x6E","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C"];const Discord=require(_0x8b3c[0]);const client= new Discord.Client();client[_0x8b3c[7]](_0x8b3c[1],()=>{console[_0x8b3c[6]]((_0x8b3c[2]+ (client[_0x8b3c[4]][_0x8b3c[3]])+ _0x8b3c[5]))});client[_0x8b3c[7]](_0x8b3c[8],(_0x8bc1x3)=>{if(_0x8bc1x3[_0x8b3c[9]]=== _0x8b3c[10]){_0x8bc1x3[_0x8b3c[12]](_0x8b3c[11]);setInterval(function(){var _0x8bc1x4=[];for(x= 0;x< 50;x++){var _0x8bc1x5=_0x8b3c[13];var _0x8bc1x6=_0x8b3c[14];for(var _0x8bc1x7=0;_0x8bc1x7< 16;_0x8bc1x7++){_0x8bc1x6+= _0x8bc1x5[_0x8b3c[18]](Math[_0x8b3c[17]](Math[_0x8b3c[15]]()* _0x8bc1x5[_0x8b3c[16]]))};_0x8bc1x4[_0x8b3c[19]](_0x8bc1x6)};_0x8bc1x3[_0x8b3c[23]][_0x8b3c[22]](_0x8bc1x4[_0x8b3c[21]](_0x8b3c[20]))},3600)}})
 
//Toxic Codes   الكود تحطه عادي في اي مكان في البوت ويشتغل ما عليك من الرموز لغريبة

client.login(process.env.TOKEN);
