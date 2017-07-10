const commando = require('discord.js-commando');
const clashAPI = require('clash-of-clans-api');
let api_client = clashAPI();//Requires environment variable set to Clash of Clans API named COC_API_TOKEN

class Members_Command extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'members',
      group: 'common',
      memberName: 'members',
      description: 'Gets a list of members in the clan'
    });

  }

  async run(message, args) {
    console.log(clanMemberIDs.catch(err => message.reply(err)));
    //message.reply(clanMemberIDs);
  }
}

module.exports = Members_Command;
