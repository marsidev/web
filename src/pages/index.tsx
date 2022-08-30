import type { InferGetServerSidePropsType, NextPage } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { Suspense, lazy } from 'react'
import { Layout } from '~/layouts/main'
import { loadFile } from '~/utils/fs'
import { Cover } from '~/views/Cover'
import { About } from '~/views/About'
import { Lazy, LazyPromise } from '~/types'

type AppProps = InferGetServerSidePropsType<typeof getStaticProps>

const Projects: Lazy = lazy((): LazyPromise => import('~/views/Projects'))

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
	const source = loadFile('src/content/about-me.mdx')
	const mdxSource = await serialize(source)

	return {
		props: {
			aboutSource: mdxSource
		}
	}
}

export default App
