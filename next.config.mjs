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
	rewrites,
	// experimental: {
	// 	runtime: 'experimental-edge'
	// },
	swcMinify: true
	// webpack: (config, ctx) => {
	// 	// don't resolve the following modules on the client to prevent this error on build --> Error: Can't resolve 'fs'
	// 	config.resolve = {
	// 		...config.resolve,
	// 		fallback: {
	// 			fs: false,
	// 			path: false,
	// 			os: false
	// 		}
	// 	}

	// 	if (ctx.nextRuntime === 'edge') {
	// 		if (!config.resolve.conditionNames) {
	// 			config.resolve.conditionNames = ['require', 'node']
	// 		}
	// 		if (!config.resolve.conditionNames.includes('worker')) {
	// 			config.resolve.conditionNames.push('worker')
	// 		}
	// 	}
	// 	return config
	// }
}

const config = withPWA(withAnalyzer(nextConfig))

export default config
