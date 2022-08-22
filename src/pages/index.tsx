import type { InferGetServerSidePropsType, NextPage } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { Layout } from '~/layouts/main'
import { loadFile } from '~/utils/fs'
import { About, Cover, Projects } from '~/views'

type AppProps = InferGetServerSidePropsType<typeof getStaticProps>

const App: NextPage<AppProps> = ({ aboutSource }) => {
	return (
		<Layout>
			<Cover />
			<About source={aboutSource} />
			<Projects />
		</Layout>
	)
}

export const getStaticProps = async () => {
	const source = loadFile('src/content/about-me.md')
	const mdxSource = await serialize(source)

	return {
		props: {
			aboutSource: mdxSource
		}
	}
}

export default App
