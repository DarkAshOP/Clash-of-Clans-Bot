/* Clash of Clans bot for discord
 * Braden Bird
 * Using CaptEmulation's wrapper for accessing the API  https://github.com/CaptEmulation/clash-of-clans-api
 * */

const commando = require('discord.js-commando')
const bot = new commando.Client();
const clashAPI = require('clash-of-clans-api');
let api_client = clashAPI(); //Requires environment variable set to Clash of Clans API named COC_API_TOKEN

bot.registry.registerGroup('common', 'Common');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(process.env.DISCORD_TOKEN); //Requires environment variable set to Discord Bot named DISCORD_TOKEN
