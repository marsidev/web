import type { InferGetServerSidePropsType, NextPage } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { Layout } from '~/layouts/main'
import { loadFile } from '~/utils/fs'
import { Cover } from '~/views/Cover'
import { About } from '~/views/About'
import { Projects } from '~/views/Projects'
import { Contact } from '~/views/Contact'
import { useActiveSection } from '~/hooks/use-active-section'

type AppProps = InferGetServerSidePropsType<typeof getStaticProps>

const App: NextPage<AppProps> = ({ aboutSource }) => {
	const { aboutRef, coverRef, projectsRef, contactRef } = useActiveSection()

	return (
		<Layout>
			<Cover ref={coverRef} id='cover' />
			<About ref={aboutRef} id='about' source={aboutSource} />
			<Projects ref={projectsRef} id='projects' />
			<Contact ref={contactRef} id='contact' pb={32} />
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
