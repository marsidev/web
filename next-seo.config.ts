/* @ref: https://github.com/garmeeh/next-seo */

const title = 'Luis Marsiglia'
const defaultTitle = `${title} - Full Stack Developer`
const description = 'Luis Marsiglia is a Full Stack Developer and Data Analyst.'
const url = 'https://marsidev.xyz'
const ogImageUrl = '/images/og.png'
const keywords = 'marsiglia, marsidev, marsi, luis marsiglia, marsigliacr, @marsigliacr, portfolio, javascript, typescipt, developer, software engineer, frontend, front-end, backend, back-end, fullstack, full-stack, full stack, data analyst, clash royale analyst'

const seo = {
	titleTemplate: `%s – ${title}`,
	defaultTitle,
	description,
	openGraph: {
		description,
		title,
		locale: 'en_US',
		type: 'website',
		url,
		canonical: url,
		images: [
			{
				url: ogImageUrl,
				width: 800,
				height: 600,
				alt: title
			}
		]
	},
	twitter: {
		handle: '@marsigliacr',
		site: '@marsigliacr',
		cardType: 'summary_large_image'
	},
	additionalMetaTags: [
		{
			name: 'keywords',
			content: keywords
		}
	],
	additionalLinkTags: [
		{
			rel: 'icon',
			href: '/favicon.ico'
		}
	]
}

export { seo as defaultSeo, url as defaultUrl }
export default seo
