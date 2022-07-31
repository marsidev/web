export const PROJECTS = [
	{
		id: 'overnote',
		name: 'Overnote',
		description:
			'Overnote is a simple notes app. It allows you to create, edit, customize and delete notes.',
		url: 'https://overnote.herokuapp.com',
		repository: 'https://github.com/marsidev/overnote',
		stack: ['react', 'nodejs', 'express', 'mongoDB', 'Mongoose', 'chakra-ui']
	},
	{
		id: 'wordly',
		name: 'Wordly',
		description:
			'Wordly is a daily word-guess game. Guess the hidden word in 6 tries. A new puzzle is available each day.',
		url: 'https://wordly-alpha.vercel.app/',
		repository: 'https://github.com/marsidev/wordly',
		stack: ['react', 'nextjs', 'chakra-ui', 'zustand']
	},
	{
		id: 'axie-hub',
		name: 'AxieHub',
		description:
			'Axie Infinity\'s fan site where you can find tools related to Axie Infinity such cards explorer.  Originally created as an entry for Origin Education Challenge.',
		url: 'https://axiehub.vercel.app/',
		repository: 'https://github.com/marsidev/axiehub',
		stack: ['react', 'nextjs', 'chakra-ui']
	},
	{
		id: 'climatic',
		name: 'Climatic',
		description:
			'Climatic is an app which shows the current weather data and weather forecast for next 7 days. Created to participate in a 14-days hackathon.',
		url: 'https://climatic.onrender.com',
		repository: 'https://github.com/marsidev/climatic',
		stack: ['react', 'typescript', 'vite', 'fastify', 'chakra-ui', 'zustand'],
		images: {
			mobile: '/images/projects/climatic-mobile.png',
			desktop: '/images/projects/climatic-desktop.png'
		}
	},
	{
		id: 'bubble',
		name: 'Bubble',
		description:
			'Live and secure chat, inspired on WhatsApp. Powered by Twilio Conversations API.',
		url: 'https://bubble-marsiglia.vercel.app/',
		repository: 'https://github.com/marsidev/bubble',
		stack: [
			'react',
			'typescript',
			'nextjs',
			'chakra-ui',
			'zustand',
			'tPRC',
			'supabase',
			'twilio'
		]
	}
]
