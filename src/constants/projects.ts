export const PROJECTS: Project[] = [
	{
		id: 'overnote',
		name: 'Overnote',
		description:
			'Overnote is a simple notes app. It allows you to create, edit, customize and delete notes. Inspired by Google Keep.',
		url: 'https://overnote.herokuapp.com',
		repository: 'https://github.com/marsidev/overnote',
		stack: ['react', 'chakra-ui', 'express', 'mongodb', 'jwt'],
		images: {
			mobile: '/images/projects/overnote-mobile.png',
			desktop: '/images/projects/overnote-desktop.png'
		},
		devTime: {
			start: '2022-01-04',
			end: '2022-02-05'
		},
		private: false,
		challenge: false
	},
	{
		id: 'wordly',
		name: 'Wordly',
		description:
			'Wordly is a daily word-guess game. Guess the hidden word in 6 tries. A new puzzle is available each day.',
		url: 'https://wordly-alpha.vercel.app/',
		repository: 'https://github.com/marsidev/wordly',
		stack: ['react', 'nextjs', 'chakra-ui', 'zustand'],
		images: {
			mobile: '/images/projects/wordly-mobile.png',
			desktop: '/images/projects/wordly-desktop.png'
		},
		devTime: {
			start: '2022-03-28',
			end: '2022-05-19'
		},
		private: false,
		challenge: false
	},
	{
		id: 'axie-hub',
		name: 'AxieHub',
		description:
			'Axie Infinity cards explorer for Classic and Origin game modes. Originally created as an entry for Origin Education Challenge.',
		url: 'https://axiehub.vercel.app/',
		repository: 'https://github.com/marsidev/axiehub',
		stack: ['react', 'nextjs', 'chakra-ui'],
		images: {
			mobile: '/images/projects/axiehub-mobile.png',
			desktop: '/images/projects/axiehub-desktop.png'
		},
		devTime: {
			start: '2022-04-16',
			end: '2022-05-07'
		},
		private: false,
		challenge: true
	},
	{
		id: 'climatic',
		name: 'Climatic',
		description:
			'Climatic is an app which shows the current weather data and weather forecast for next 7 days. Created to participate in a 14-days hackathon.',
		url: 'https://climatic.onrender.com',
		repository: 'https://github.com/marsidev/climatic',
		stack: [
			'react',
			'typescript',
			'vite',
			'fastify',
			'chakra-ui',
			'zustand',
			'rapid-api',
			'i18next',
			'vitest',
			'playwright'
		],
		images: {
			mobile: '/images/projects/climatic-mobile.png',
			desktop: '/images/projects/climatic-desktop.png'
		},
		devTime: {
			start: '2022-05-22',
			end: '2022-06-22'
		},
		private: false,
		challenge: true
	},
	{
		id: 'bubble',
		name: 'Bubble',
		description:
			'Live and secure chat, inspired by WhatsApp. Powered by Twilio Conversations API. Created to participate in a 20-days hackathon.',
		url: 'https://bubble-marsiglia.vercel.app/',
		repository: 'https://github.com/marsidev/bubble',
		stack: [
			'react',
			'typescript',
			'nextjs',
			'twilio',
			'chakra-ui',
			'zustand',
			'trpc',
			'supabase',
			'prisma',
			'next-auth'
		],
		images: {
			mobile: '/images/projects/bubble-mobile.png',
			desktop: '/images/projects/bubble-desktop.png'
		},
		devTime: {
			start: '2022-07-12',
			end: '2022-07-21'
		},
		private: false,
		challenge: true
	},
	{
		id: 'royaleapp',
		name: 'Royale App',
		description:
			'RoyaleApp is a Clash Royale\'s fan site where you can find tools such player battlelogs, player duels, player decks, duels combo builder, tournaments ranking, top ladder ranking, decks matchups, and more. Focused on competitive battles.',
		stack: [
			'react',
			'nextjs',
			'chakra-ui',
			'mongodb',
			'mongoose',
			'zustand',
			'next-auth',
			'Clash Royale API'
		],
		images: {
			mobile: '/images/projects/royaleapp-mobile.png',
			desktop: '/images/projects/royaleapp-desktop.png'
		},
		devTime: {
			start: '2022-02-05',
			end: ''
		},
		private: true,
		challenge: false
	}
]
