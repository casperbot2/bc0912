const Discord = require('discord.js');  
const client = new Discord.Client(); 

client.on('ready', () => {
  console.log(`Hixxx online`);

});
//Hixx
client.on('message', message => {
if (message.content.split(' ')[0] == '+m')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("CONNECT"))  return;
member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                            message.delete();
});
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Abo N3al`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Abo N3al ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`I am Mkaf7Bc.`,"http://twitch.tv/Sss12")
client.user.setStatus("dnd")
});


client.login(process.env.TOKEN);
