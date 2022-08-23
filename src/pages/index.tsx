import type { InferGetServerSidePropsType, NextPage } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { lazy, useRef } from 'react'
import { Layout } from '~/layouts/main'
import { loadFile } from '~/utils/fs'
import { About, Cover } from '~/views'
import { useInViewport } from '~/hooks/useInViewport'

type AppProps = InferGetServerSidePropsType<typeof getStaticProps>

const Projects = lazy(() => import('~/views/Projects'))

const App: NextPage<AppProps> = ({ aboutSource }) => {
	const childRefContainer1 = useRef<HTMLDivElement>(null)
	const isRendered1 = useInViewport(childRefContainer1)

	const childRefContainer2 = useRef<HTMLDivElement>(null)
	const isRendered2 = useInViewport(childRefContainer2)

	return (
		<Layout>
			<Cover />

			<div ref={childRefContainer1}>
				{isRendered1 && <About source={aboutSource} />}
			</div>

			<div ref={childRefContainer2}>
				{isRendered2 && <Projects />}
			</div>

			{/* <Suspense fallback='loading...'>
				<Projects />
			</Suspense> */}
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
