import type { InferGetServerSidePropsType, NextPage } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { useInView } from 'react-intersection-observer'
import { Layout } from '~/layouts/main'
import { loadFile } from '~/utils/fs'
import { Cover } from '~/views/Cover'
import { About } from '~/views/About'
import { Projects } from '~/views/Projects'
import { currentSectionAtom } from '~/store'

type AppProps = InferGetServerSidePropsType<typeof getStaticProps>

const App: NextPage<AppProps> = ({ aboutSource }) => {
	const { ref: coverRef, inView: coverVisible } = useInView({
		threshold: 0,
		rootMargin: '-300px'
	})

	const { ref: aboutRef, inView: aboutVisible } = useInView({
		threshold: 0,
		rootMargin: '-300px'
	})

	const { ref: projectsRef, inView: projectsVisible } = useInView({
		threshold: 0,
		rootMargin: '-300px'
	})

	const [_, setCurrentSection] = useAtom(currentSectionAtom)

	useEffect(() => {
		if (projectsVisible) setCurrentSection('projects')
		else if (aboutVisible) setCurrentSection('about')
		else if (coverVisible) setCurrentSection('home')
	}, [aboutVisible, projectsVisible])

	return (
		<Layout>
			<Cover ref={coverRef} />
			<About ref={aboutRef} source={aboutSource} />
			<Projects ref={projectsRef} />
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
