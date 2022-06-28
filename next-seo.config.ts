/* @ref: https://github.com/garmeeh/next-seo */

const title = 'Luis Marsiglia'
const defaultTitle = `${title} - JavaScript Developer`
const description = 'Luis Marsiglia is a full-stack JavaScript developer from Venezuela.'
const url = 'https://marsi.vercel.app'
const imageUrl = `https://og-image.vercel.app/${encodeURI(title)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`
const keywords = 'marsiglia, marsidev, marsi, luis marsiglia, marsigliacr, @marsigliacr, portfolio, javascript, typescipt, developer, software engineer'

const seo = {
  // title,
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
        url: imageUrl,
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
