import pwa from 'next-pwa'
import analyzer from '@next/bundle-analyzer'
import runtimeCaching from 'next-pwa/cache.js'

const IS_PROD = process.env.NODE_ENV === 'production'

const withPWA = pwa({
	disable: !IS_PROD,
	dest: 'public',
	runtimeCaching,
	buildExcludes: [/middleware-manifest.json$/]
})

const withAnalyzer = analyzer({
	enabled: process.env.ANALYZE === 'true'
})

const rewrites = async () => [
	{
		destination: 'https://cdn.splitbee.io/sb.js',
		source: '/bee.js'
	},
	{
		destination: 'https://hive.splitbee.io/:slug',
		source: '/_hive/:slug'
	}
]

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		removeConsole: IS_PROD
	},
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	rewrites
}

const config = withPWA(withAnalyzer(nextConfig))

export default config
