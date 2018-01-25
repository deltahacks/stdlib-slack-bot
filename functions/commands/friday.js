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

	var slashCommand = '/friday';
	var baseUrl = 'https://deltahacks.com';
	var url = {
		'schedule': `${baseUrl}/schedule`,
		'etbmap': `${baseUrl}/etbmap`,
		'map': `${baseUrl}/map`,
		'challenges': `${baseUrl}/challenges`,
		'mentors': `${baseUrl}/mentors`,
		'workshops': `${baseUrl}/workshops`,
		'bus': `goo.gl/pVGy9g`,
		'sponsors': `${baseUrl}/#sponsor`
	}

	var param = {
		'schedule': {
			text: `Please check out our schedule at ${url.schedule}`,
			attachments: [],// add attachment here?
			description: 'description for schedule'
		},
		'map': {
			text: `For ETB floor plan, please visit ${url.etbmap} \n For McMaster University map, please visit ${url.map}`,
			attachments: [],// add attachment here?
			description: 'description for map'
		},
		'where is': {
			text: ``,
			attachments: [],
			description: 'where is description for <>'
		},
		'sponsors': {
			text: `You can check out our spectacular sponsors here: ${url.sponsors}! \n You can also try \`${slashCommand} where is <sponsor name>\` to find out where their tables are! \n Here are the sponsors who are at the hackathon: \n`,
			attachments: [],
			description: 'description for sponsors'
		},
		'who are you': {
			text: `Hello, <@${user}>! I am Friday! I am a serverless slack bot built with *StdLib*. Do you know that, StdLib is DeltaHacks\' title sponsor? Go talk to them in ETB 126!`,
			attachments: [],
			description: 'who are description for you'
		},
		'prizes': {
			text: `We have over $10K in prizes! Check out our list of prizes at https://deltahacksiv.hackerearth.com/#prizes`,
			attachments: [],
			description: 'description for prizes'
		},
		'challenges': {
			text: `You can view all the fascinating challenges/app ideas here: ${url.challenges}`,
			attachments: [],
			description: 'description for challenges'
		},
		'mentors': {
			text: `You can check out our awesome mentors here: ${url.mentors}`,
			attachments: [],
			description: ''
		},
		'workshops': {
			text: `You can check out our amazing workshops here: ${url.workshops}`,
			attachments: [],
			description: ''
		}
	};

	var helpText = 'Here are the commands I understand: \n';
	for (ele in param) {
		helpText += `    \`${slashCommand} ${ele}\` - ${param[ele]['description']} \n`
	}
	param['help'] = {text: helpText, attachments: []};

	// if text contains 'where', loop through keywords dictionary to match keyword, and return its location
	// if no match, prompt available keywords
	var etbMapSentence = `\n For your convenience, here is the floor plan for ETB: ${url.etbmap}`
	var locations = {
		'stdlib': {
			name: 'StdLib',
			type: 'sponsor',
			command: '',
			place: 'ETB 1st floor in room 126',
		},
		'td': {
			name: 'TD',
			type: 'sponsor',
			command: '',
			place: 'ETB 1st floor at table 11',
		},
		'arcelormittal dofasco': {
			name: 'ArcelorMittal Dofasco',
			type: 'sponsor',
			command: '',
			place: 'ETB 1st floor at table 15',
		},
		'rl solutions': {
			name: 'RL Solutions',
			type: 'sponsor',
			command: '',
			place: 'ETB 5th floor at table 18',
		},
		'konrad group': {
			name: 'Konrad Group',
			type: 'sponsor',
			command: '',
			place: 'ETB 5th floor at table 19',
		},
		'vena solutions': {
			name: 'Vena Solutions',
			type: 'sponsor',
			command: '',
			place: 'ETB 5th floor at table 20',
		},
		'the forge': {
			name: 'The Forge',
			type: 'sponsor',
			command: '',
			place: 'ETB 5th floor at table 21',
		},
		'cse': {
			name: 'Communications Security Establishment',
			type: 'sponsor',
			command: 'CSE',
			place: 'ETB 5th floor at table 22',
		},
		'rbc': {
			name: 'RBC Technology',
			type: 'sponsor',
			command: 'RBC',
			place: 'ETB 5th floor at table 23',
		},
		'indellient': {
			name: 'Indellient',
			type: 'sponsor',
			command: '',
			place: 'ETB 5th floor at table 24',
		},
		'fdm group': {
			name: 'FDM Group Canada',
			type: 'sponsor',
			command: 'FDM Group',
			place: 'ETB 5th floor at table 25',
		},
		'kpmg': {
			name: 'KPMG',
			type: 'sponsor',
			command: '',
			place: 'ETB 5th floor at table 26',
		},
		'communitech': {
			name: 'Communitech',
			type: 'sponsor',
			command: '',
			place: 'ETB 5th floor at table 27',
		},
		'kobo': {
			name: 'Rakuten Kobo Inc.',
			type: 'sponsor',
			command: 'Kobo',
			place: 'ETB 5th floor at table 28',
		},
		'cibc': {
			name: 'CIBC',
			type: 'sponsor',
			command: '',
			place: 'ETB 5th floor at table 29',
		},
		'parity': {
			name: 'Parity',
			type: 'sponsor',
			command: '',
			place: 'ETB 5th floor at table 30',
		},
		'xesto': {
			name: 'Xesto',
			type: 'sponsor',
			command: '',
			place: 'ETB 5th floor at table 31',
		},
		'rogers': {
			name: 'Rogers',
			type: 'sponsor',
			command: '',
			place: 'ETB 5th floor at table 32',
		},
		'hatch': {
			name: 'Hatch Ltd.',
			type: 'sponsor',
			command: 'Hatch',
			place: 'ETB 5th floor at table 33',
		},
		'workshop': {
			name: 'Workshop',
			type: 'room',
			command: '',
			place: `Work shops take place on ETB 2nd floor in both room 228 and 230. ${etbMapSentence} ${param.workshops.text}`,
		},
		'lunch': {
			name: 'lunch',
			type: 'meal',
			command: '',
			place: `All lunches will be in ETB basement.${etbMapSentence}`,
		},
		'dinner': {
			name: 'dinner',
			type: 'meal',
			command: '',
			place: `On Saturday, dinner will be in ETB basement. On Sunday, dinner will be in MDCL lobby. ${etbMapSentence}`,
		},
		'breakfast': {
			name: 'breakfast',
			type: 'meal',
			command: '',
			place: `Sunday breakfast will be in ETB basement. ${etbMapSentence}`,
		},
		'expo': {
			name: 'expo',
			type: 'room',
			command: '',
			place: `The Project Expo will be in all ETB 2nd floor rooms. ${etbMapSentence}`,
		},
		'closing': {
			name: 'closing',
			type: 'room',
			command: '',
			place: `Closng Ceremony will be in MDCL 1305/1307. Here is the McMaster University map: ${url.map}`,
		},
		'bus': {
			name: 'bus',
			type: 'room',
			command: '',
			place: 'Bus will depart from Communications Research Laboratory, McMaster University. Here\'s where it is on Google Map: goo.gl/pVGy9g',
		},
		'mentor hub': {
			name: 'mentor hub',
			type: '',
			command: '',
			place: 'The Mentor Hub is on ETB first floor room 124',
		}
		// '': {
		// 	name: '',
		// 	type: '',
		// 	command: '',
		// 	place: '',
		// }
	}

	text = text.toLowerCase()
	var command = param[text];

	var where = 'where is';
	var locationString = '';
	var sponsorString = '';

	for (ele in locations) {
		var item = locations[ele];
		var name = item.command.length > 0 ? item.command : item.name;
		// locationString += `- \`${name}\` \n`
		locationString += `\`${name}\`   `;
		if (item.type == 'sponsor') {
			sponsorString += `\`${name}\`   `;
		}
	}
	locationString += `\n Use \`${slashCommand} ${where} <place>\` to find location of \`<place>\``;
	param.sponsors.text += sponsorString;


	if(text == where) {
		command = {'text': 'Here are the locations I know: \n', attachments: []};
		command.text += locationString;

	}else if (text.indexOf(where) > -1) {
		command = {'text': '', attachments: []};
		var name = text.slice(where.length).trim().toLowerCase();
		var item = locations[name];

		if (item == undefined) {
			command = {'text': 'I don\'t know where that is. However, here are the locations I do know: \n', attachments: []};
			command.text += locationString
		} else {
			if (item.type == 'sponsor') {
				command.text = `${item.name} is located on ${item.place}. ${etbMapSentence}`;
			}else {
				command.text = item.place;
			}
		}
	}

	if (text.trim('string').length < 1) {
		command = {
			text: param.help.text,
			attachments: []
		}
	}

	if (command == undefined) {
		command = {
			text: `I don't understand \`${slashCommand} ${text}\`. ${param.help.text}`,
			attachments: []
		}
	}

	callback(null, command);
};
