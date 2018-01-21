const lib = require('lib')({token: process.env.STDLIB_TOKEN});

/**
* /hello
*
*   Basic 'Hello World' command.
*   All Commands use this template, simply create additional files with
*   different names to add commands.
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/


module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {

	var slashCommand = '\\hello';

	var data = {
		'schedule': {
			text: `Please check out our schedule at https://deltahacks.com/schedule`,
			attachments: [],// add attachment here?
			description: 'description for schedule'
		},
		'map': {
			text: `For ETB floor map, visit https://deltahacks.com/etbmap \n For McMaster University map, visit https//deltahacks.com/map`,
			attachments: [],// add attachment here?
			description: 'description for map'
		},
		'where is <location>': {
			text: ``,
			attachments: [],
			description: 'where is description for <>'
		},
		'sponsors': {
			text: `You can visit http://deltahacks.com/#sponsors for a complete list of sponsors! \n You can also try \`${slashCommand} where is <sponsor name>\` to find out where their booth is!`,
			attachments: [],
			description: 'description for sponsors'
		},
		'who are you': {
			text: `Hello, <@${user}>! I am <slack bot name>! I am a serverless slack bot built with *StdLib*. Do you know that, StdLib is DeltaHacks\' title sponsor? Go talk to them in ETB 126!`,
			attachments: [],
			description: 'who are description for you'
		},
		'prizes': {
			text: `We have over $10K in prizes! Check out our list of prizes at https://deltahacksiv.hackerearth.com/#prizes`,
			attachments: [],
			description: 'description for prizes'
		},
		'challenges': {
			text: `You can view the list of challenges here: https://deltahacks.com/challenges`,
			attachments: [],
			description: 'description for challenges'
		}
	};

	var helpText = 'Here is a list of commands: \n';
	for (ele in data) {
		helpText += `\`${slashCommand} ${ele}\` - ${data[ele]['description']} \n`
	}
	data['help'] = {text: helpText, attachments: []};


	var command = data[text.toLowerCase()];

	if (command == undefined) {
		command = {
			text: 'I don\'t understand. Use ' + slashCommand + 'to see a list of commands',
			attachments: []
		}
	}


	callback(null, {
		text: command.text,
		attachments: command.attachments
	});
};
