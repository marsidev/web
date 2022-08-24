import mdx from '@next/mdx'
import pwa from 'next-pwa'
import runtimeCaching from 'next-pwa/cache.js'

const IS_PROD = process.env.NODE_ENV === 'production'

const withMDX = mdx({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: []
	}
})

const withPWA = pwa({
	disable: !IS_PROD,
	dest: 'public',
	runtimeCaching,
	buildExcludes: [/middleware-manifest.json$/]
})

const rewrites = async () => [
	{
		destination: 'https://cdn.splitbee.io/sb.js',
		source: '/bee.js'
	},
	{
		destination: 'https://hive.splitbee.io/:slug',
		source: '/_hive/:slug'
	},
	{
		source: '/bear.js',
		destination: 'https://cdn.panelbear.com/analytics.js'
	},
	{
		source: '/_bear/:path*',
		destination: 'https://api.panelbear.com/:path*'
	}
]

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		removeConsole: IS_PROD
	},
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	rewrites,
	env: {
		PANELBEAR_ID: process.env.PANELBEAR_ID
	}
}

export default withPWA(withMDX(nextConfig))
