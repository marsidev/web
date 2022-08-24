import mdx from '@next/mdx'
import pwa from 'next-pwa'
import runtimeCaching from 'next-pwa/cache.js'

const withMDX = mdx({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: []
	}
})

const withPWA = pwa({
	disable: process.env.NODE_ENV !== 'production',
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

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'nonce-*' 'strict-dynamic' https://cdn.panelbear.com/analytics.js https://cdn.splitbee.io/sb.js;
	child-src marsidev.xyz https://marsidev.xyz;
  connect-src marsidev.xyz https://marsidev.xyz api.panelbear.com hive.splitbee.io;
  style-src 'self' 'unsafe-inline';
  font-src 'self';
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
		key: 'X-Content-Type-Options',
		value: 'nosniff'
	},
	{
		key: 'Content-Security-Policy',
		value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
	}
]

const headers = async () => {
	if (process.env.NODE_ENV !== 'production') {
		return []
	}

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
		removeConsole: process.env.NODE_ENV === 'production'
	},
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	rewrites,
	headers,
	publicRuntimeConfig: {
		PANELBEAR_ID: process.env.PANELBEAR_ID
	}
}

export default withPWA(withMDX(nextConfig))