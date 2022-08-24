const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: []
	}
})

const withPWA = require('next-pwa')({
	disable: process.env.NODE_ENV !== 'production',
	dest: 'public',
	runtimeCaching,
	buildExcludes: [/middleware-manifest.json$/]
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production'
	},
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	i18n: {
		locales: ['en', 'es'],
		defaultLocale: 'en',
		localeDetection: false
	}
}

module.exports = withPWA(withMDX(nextConfig))
