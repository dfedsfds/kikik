const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const sql = require('sqlite');

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","SV."));
    });



client.login(process.env.BOT_TOKEN);
