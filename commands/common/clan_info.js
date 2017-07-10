const commando = require('discord.js-commando');
const clashAPI = require('clash-of-clans-api');
let api_client = clashAPI();//Requires environment variable set to Clash of Clans API named COC_API_TOKEN

class Clan_Info_Command extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'clan',
      group: 'common',
      memberName: 'clan',
      description: 'Gets a clan\'s information'
    });

  }

  async run(message, args) {
    api_client
      .clanByTag(args)
      .then(response => message.reply("Name: " + response.name + "\nClan Level: " + response.clanLevel + "\nDescription: " + response.description))
      .catch(err => message.reply(err));
  }
}

module.exports = Clan_Info_Command;
