//setup
const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzE5OTA1OTgxNjg1MDM5MTM0.XuCleQ.G7v9NMUxx1bO_M4i69KTtM2YVpA'; //Take your bot's token because that's mine and it doesn't work discord change it

const PREFIX = 'h!';

var version = '1.0.1b'

//Bot Activity
bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('h!help, DM GDt9Wa2!', { type: 'LISTENING'}).catch(console.error);
})

//Greeting
bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
    if(!channel) return;

    channel.send(`Welcome to our server, ${member} , please read the rules in the rules channel!`)
});

//vars
var infoHelp = "Info , Embed , Youtube"
var othersHelp = "Help , Clear"

//commands
bot.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'help':
            const embed2 = new Discord.MessageEmbed()
            .setTitle('Happ1neSS Commands')
            .addField('Info:', infoHelp)
            .addField('Others:', othersHelp)
            .setColor(0xF39C12)
            .setThumbnail(msg.author.avatarURL)
            .setFooter('Subscribe to my Youtube!: GDt9Wa2')
            msg.channel.send(embed2);
            break;
        case 'ping':
            msg.channel.send('Can you hear me?!');
            break;
        case 'info':
            if(args[1] === 'version'){
                msg.channel.send('Version ' + version);

            }else{
                msg.channel.send('Invalid Args')
            }
            break;
        case 'Youtube':
            msg.channel.send('https://www.youtube.com/channel/UCiBb8xDkZeqJJcZ9Srxv5Dw');
            break;
        case 'clear':
            if(!args[1]) return msg.reply('Error please define second arg');
            msg.channel.bulkDelete(args[1]);
            break;
        case 'embed':
            const embed = new Discord.MessageEmbed()
            .setTitle('Player Information')
            .addField('Player Name', msg.author.username)
            .addField('Version ', version)
            .addField('Current Server', msg.guild.name)
            .setColor(0xF39C12)
            .setThumbnail(msg.author.avatarURL)
            .setFooter('Subscribe to my Youtube!: GDt9Wa2')
            msg.channel.send(embed);
            break;
    }
})

bot.login(token);
