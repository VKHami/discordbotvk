module.exports = {
        name: 'ban',
        description:'Ban a user from thưe sever.',
        usage: '<user>',
        args:true,
        guildOnly: true,
        execute(message, args){
            if (command.guildOnly && message.channel.type !== 'text') {
                return message.reply('I can\'t execute that command inside DMs!');
            }
            if(!message.mention.users.size){
                return message.reply('you need to tag users in order to kick them!');
            }
            const taggedUser = message.mentions.users.first();

            message.channel.send(`You wanted to kick: ${taggedUser.username}`);
        }
