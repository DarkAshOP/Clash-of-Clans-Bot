const commando = require('discord.js-commando');
const clashAPI = require('clash-of-clans-api');
let api_client = clashAPI();//Requires environment variable set to Clash of Clans API named COC_API_TOKEN

//Sets a clan to be the default lookup clan (expected to be the channel's clan)
class Set_Clan_Command extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'setclan',
      group: 'common',
      memberName: 'setclan',
      description: 'Sets default clan'
    });
  }

  async run(message, args) {
    process.env['CLAN'] = args
      message.reply("Current clan updated.");
  }
}

module.exports = Set_Clan_Command;
