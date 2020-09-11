

const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "$";

//const GphApiClient = require('giphy-js-sdk-core')
//const giphy = GphApiClient("C7EWK2taU0zBYnn9EdECIOHVHiTIPdw7");
//https://support.glitch.com/t/how-to-make-discord-send-random-images/19435/8

client.once('ready', () =>{
    console.log('JermaineBot is online!')
});

/* giphy.search("gifs", { q: "meme" })
.then(response => {
var totalResponse = response.data.length;
var responseIndex = Math.floor(Math.random() * 10 + 1) % totalResponse;
var responseFinal = response.data[responseIndex];
message.channel.send(

{
files: [responseFinal.images.fixed_height.url]
}
);
}); */




client.on('message', (message)=>{

if(message.content.toLowerCase().includes('gj'.toLowerCase())||
message.content.toLowerCase().includes('good job'.toLowerCase())||
message.content.toLowerCase().includes('jermaine'.toLowerCase())||
message.content.toLowerCase().includes('goodjob'.toLowerCase())
) 
{
    if (message.author.bot) return;
    message.reply(':thumbsup:**G-Double-O-D-J-O-B-Good-Job-Good-Job**:thumbsup:');
}
if(message.content.toLowerCase().includes('pog'.toLowerCase())||
    message.content.toLowerCase().includes('pogg'.toLowerCase())||
    message.content.toLowerCase().includes('pogger'.toLowerCase())||
    message.content.toLowerCase().includes('pogchamp'.toLowerCase())
    ) 
    {
        if (message.author.bot) return;
        message.channel.send("POGCHAMP", {files: ["https://media1.tenor.com/images/a7ade358df79ace0a2c038524215bac6/tenor.gif?itemid=14340727"]});
    }
if (message.content.startsWith(prefix + "c")) 
    {
        const taggedUser = message.mentions.users.first();
        if(!(taggedUser == undefined))
        {
        
            message.channel.send(`:clap: **Good Job, ${taggedUser.username}!** :clap:`,{files: ["https://media1.tenor.com/images/8dec4f49f6d7d1c3f698e7d231b36716/tenor.gif?itemid=18412599"]});
        }
    }

    
});
client.on('message', (message)=>{
if (message.content.startsWith(prefix + "d"))
    {
        client.users.cache.get('261364766864441345').send('ur bad at valorant');
        
    }
});
//https://youtu.be/Logth4aMB-o
//https://media1.tenor.com/images/8dec4f49f6d7d1c3f698e7d231b36716/tenor.gif?itemid=18412599

client.login('NzUzNzUwMzc1NzY4NjUzODU0.X1quvQ.97pHQd6XxCGFHTIPR0Ku5XYc_Xo')

