import type { Project } from '~/types'

export const PROJECTS: Project[] = [
	{
		id: 'overnote',
		name: 'Overnote',
		description:
			'Overnote is a notes app. It allows you to create, edit, customize and delete notes. Inspired by Google Keep.',
		url: 'https://overnote.onrender.com',
		repository: 'https://github.com/marsidev/overnote',
		stack: ['react', 'chakra-ui', 'express', 'mongodb', 'jwt'],
		images: {
			mobile: '/images/projects/overnote-mobile.webp',
			desktop: '/images/projects/overnote-desktop.webp'
		},
		devTime: {
			start: '2022-01-04',
			end: '2022-02-05'
		},
		tags: ['web']
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
			mobile: '/images/projects/wordly-mobile.webp',
			desktop: '/images/projects/wordly-desktop.webp'
		},
		devTime: {
			start: '2022-03-28',
			end: '2022-05-19'
		},
		tags: ['web', 'unfinished']
	},
	{
		id: 'axie-hub',
		name: 'AxieHub',
		description:
			'Axie Infinity cards explorer for Classic and Origin game modes. Created as an entry for a 20-day challenge.',
		url: 'https://axiehub.vercel.app/',
		repository: 'https://github.com/marsidev/axiehub',
		stack: ['react', 'nextjs', 'chakra-ui'],
		images: {
			mobile: '/images/projects/axiehub-mobile.webp',
			desktop: '/images/projects/axiehub-desktop.webp'
		},
		devTime: {
			start: '2022-04-16',
			end: '2022-05-07'
		},
		tags: ['web', 'challenge']
	},
	{
		id: 'climatic',
		name: 'Climatic',
		description:
			'Climatic is an app that shows the current weather data and weather forecast for the next 7 days. Created to participate in a 14-day hackathon.',
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
			'playwright',
			'rtl'
		],
		images: {
			mobile: '/images/projects/climatic-mobile.webp',
			desktop: '/images/projects/climatic-desktop.webp'
		},
		devTime: {
			start: '2022-05-22',
			end: '2022-06-22'
		},
		tags: ['web', 'challenge']
	},
	{
		id: 'bubble',
		name: 'Bubble',
		description:
			'Live and secure chat, inspired by WhatsApp. Powered by Twilio Conversations API. Created to participate in a 20-day hackathon.',
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
			mobile: '/images/projects/bubble-mobile.webp',
			desktop: '/images/projects/bubble-desktop.webp'
		},
		devTime: {
			start: '2022-07-12',
			end: '2022-07-21'
		},
		tags: ['web', 'challenge']
	},
	{
		id: 'royaleapp',
		name: 'Royale App',
		description:
			'RoyaleApp is a Clash Royale fan site where you can find tools such as player battle logs, player duels, player decks, duels combo builder, tournaments ranking, top ladder ranking, decks matchups, and more. Focused on competitive battles.',
		stack: ['react', 'nextjs', 'chakra-ui', 'mongodb', 'mongoose', 'zustand', 'next-auth', 'clash-royale-api'],
		images: {
			mobile: '/images/projects/royaleapp-mobile.webp',
			desktop: '/images/projects/royaleapp-desktop.webp'
		},
		devTime: {
			start: '2022-02-05',
			end: ''
		},
		tags: ['web', 'private']
	},
	{
		id: 'password-generator',
		name: 'Password Generator',
		description: 'Generate strong passwords to stay safe over the internet.',
		url: 'https://pwdg.vercel.app',
		repository: 'https://github.com/pwdg',
		stack: ['astro', 'solidjs', 'typescript', 'tailwindcss'],
		images: {
			mobile: '/images/projects/password-generator-mobile.webp',
			desktop: '/images/projects/password-generator-desktop.webp'
		},
		devTime: {
			start: '2022-10-03',
			end: '2022-11-08'
		},
		tags: ['web', 'challenge']
	},
	{
		id: 'react-turnstile',
		name: 'React Turnstile',
		description: 'Cloudflare Turnstile integration for React.',
		url: 'https://www.npmjs.com/package/@marsidev/react-turnstile',
		repository: 'https://github.com/marsidev/react-turnstile',
		stack: ['npm', 'react', 'typescript', 'playwright', 'actions'],
		devTime: {
			start: '2022-10-14',
			end: ''
		},
		tags: ['package'],
		packageName: '@marsidev/react-turnstile'
	},
	{
		id: 'create',
		name: 'Create',
		description: 'Create multiple files from your command line.',
		url: 'https://www.npmjs.com/package/@marsidev/create',
		repository: 'https://github.com/marsidev/create',
		stack: ['npm', 'nodejs', 'typescript', 'vitest', 'actions'],
		devTime: {
			start: '2022-09-02',
			end: '2022-09-05'
		},
		tags: ['package'],
		packageName: '@marsidev/create'
	}
]
