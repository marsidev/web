import type { InferGetServerSidePropsType, NextPage } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { Suspense, lazy } from 'react'
import { Layout } from '~/layouts/main'
import { loadFile } from '~/utils/fs'
import { About, Cover } from '~/views'

type AppProps = InferGetServerSidePropsType<typeof getStaticProps>

const Projects = lazy(() => import('~/views/Projects'))

const App: NextPage<AppProps> = ({ aboutSource }) => {
	return (
		<Layout>
			<Cover />
			<About source={aboutSource} />

			<Suspense fallback='loading...'>
				<Projects />
			</Suspense>
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
