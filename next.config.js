const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: []
	}
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production'
	},
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
}

module.exports = withMDX(nextConfig)
