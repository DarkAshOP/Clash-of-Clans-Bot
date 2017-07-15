const commando = require('discord.js-commando');
const clashAPI = require('clash-of-clans-api');
let api_client = clashAPI(); //Requires environment variable set to Clash of Clans API named COC_API_TOKEN

class COC_Command extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'test',
      group: 'common',
      memberName: 'test',
      description: 'Tests printing to discord info from COC API'
    });
  }

  async run(message, args) {
    //Promsie chain
    api_client
      .playerByTag('#L080RLPC')
      .catch(err => message.reply(err))
      .then(response => message.reply("Your target is " + response.name + "."));
  }
}

module.exports = COC_Command;
