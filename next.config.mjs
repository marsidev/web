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

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production'
	},
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
}

export default withPWA(withMDX(nextConfig))
