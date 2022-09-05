import mdx from '@next/mdx'
import pwa from 'next-pwa'
import analyzer from '@next/bundle-analyzer'
import { withSentryConfig } from '@sentry/nextjs'
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

const CSP = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
	connect-src 'self' https://vitals.vercel-insights.com https://res.cloudinary.com https://o1099137.ingest.sentry.io;
  style-src 'self' 'unsafe-inline';
  font-src 'self';
	img-src 'self' https://res.cloudinary.com data:;
`

const securityHeaders = [
	{
		key: 'X-XSS-PROTECTION',
		value: '1; mode=block'
	},
	{
		key: 'X-Frame-Options',
		value: 'SAMEORIGIN'
	},
	{
		key: 'Content-Security-Policy-Report-Only',
		value: CSP.replace(/\s{2,}/g, ' ').trim()
	}
]

const headers = async () => {
	if (!IS_PROD) return []

	return [
		{
			source: '/:path*',
			headers: securityHeaders
		}
	]
}

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		removeConsole: IS_PROD
	},
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	rewrites,
	headers,
	env: {
		PANELBEAR_ID: process.env.PANELBEAR_ID
	},
	sentry: {
		hideSourceMaps: true
	}
}

const config = withMDX(withPWA(withAnalyzer(nextConfig)))

/** @type {Partial<import("@sentry/nextjs").SentryWebpackPluginOptions>} */
const sentryOptions = { silent: true }

export default withSentryConfig(config, sentryOptions)
