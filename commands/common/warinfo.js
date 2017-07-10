const commando = require('discord.js-commando');
const clashAPI = require('clash-of-clans-api');
let api_client = clashAPI();//Requires environment variable set to Clash of Clans API named COC_API_TOKEN

class War_Info_Command extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'warinfo',
      group: 'common',
      memberName: 'warinfo',
      description: 'Retieves current war information'
    });
  }

  async run(message, args) {
    //Promise chain, currently getting TypeError: Cannot read property 'map' of null
    api_client
        .clanCurrentWarByTag(args)
        .catch(err => message.reply(err))
        .then(response => message.reply(response));
  }
}

module.exports = War_Info_Command;
