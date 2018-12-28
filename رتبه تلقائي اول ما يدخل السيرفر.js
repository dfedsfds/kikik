client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","SV."));
    });



client.login(process.env.BOT_TOKEN);
