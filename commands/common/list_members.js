const commando = require('discord.js-commando');
const clashAPI = require('clash-of-clans-api');
let api_client = clashAPI();//Requires environment variable set to Clash of Clans API named COC_API_TOKEN

function readMembers(members){
  var output = '';
  for(i in members){
    output = output + members[i].clanRank + '. ' + members[i].name + '(' + members[i].tag + ')\n';
  }
  return output;
}

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
    api_client.clanMembersByTag(args)
              .then(response => message.reply('\n' + readMembers(response['items'])))
              .catch(err => console.log(err));
  }
}

module.exports = Members_Command;
