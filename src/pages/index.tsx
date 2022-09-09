import type { InferGetServerSidePropsType, NextPage } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { useInView } from 'react-intersection-observer'
import { Layout } from '~/layouts/main'
import { loadFile } from '~/utils/fs'
import { Cover } from '~/views/Cover'
import { About } from '~/views/About'
import { LazyRender } from '~/components/LazyRender'
import { Projects } from '~/views/Projects'
import { useActiveSection } from '~/hooks/use-active-section'

type AppProps = InferGetServerSidePropsType<typeof getStaticProps>

const App: NextPage<AppProps> = ({ aboutSource }) => {
	const { aboutRef, coverRef, projectsRef } = useActiveSection()

	const { ref: aboutParentRef, inView: aboutSectionShowedEnough } =
		useInView({
			threshold: 0.5,
			triggerOnce: true
		})

	return (
		<Layout>
			<Cover ref={coverRef} />

			<div ref={aboutParentRef}>
				<About ref={aboutRef} source={aboutSource} />
			</div>

			<LazyRender shouldRender={aboutSectionShowedEnough}>
				<Projects ref={projectsRef} />
			</LazyRender>
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
