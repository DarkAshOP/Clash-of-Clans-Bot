# Clash-of-Clans-Bot
A bot for Discord to be used in planning a clan's war activities (Created by Braden Bird).
This project bases all interactions through CaptEmulation's project found at <https://github.com/CaptEmulation/clash-of-clans-api>

# Setting up Environment Variables
In order to contact with the Clash of Clans API and the Discord Bot API, the API key must be placed in an environment variable. For Clash of Clans, the environment variable must be named COC_API_TOKEN. For Discord, the variable should be named DISCORD_TOKEN. To obtain your own keys visit the following websites:

<https://developer.clashofclans.com>

<https://discordapp.com/developers/applications/me>

# Launching the Bot
To start running the bot, you must have NodeJS installed. While in the current directory, launch the bot by typing 

`node --harmony .`

# Current Commands
`!members #1234` Lists out all members in a clan where 1234 is substituted for the unique clan identifier.

`!clan #1234` Lists out information about a clan where 1234 is substituted for the unique clan identifier.

`!coctest` Can be used to determine if your bot is operating correctly.
