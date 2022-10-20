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

const App: NextPage<AppProps> = ({ aboutLong, aboutShort }) => {
	const { aboutRef, coverRef, projectsRef, contactRef } = useActiveSection()

	return (
		<Layout>
			<Cover ref={coverRef} id='cover' />
			<About ref={aboutRef} id='about' longSource={aboutLong} shortSource={aboutShort} />
			<Projects ref={projectsRef} id='projects' />
			<Contact ref={contactRef} id='contact' pb={16} />
		</Layout>
	)
}

export const getStaticProps = async () => {
	const aboutShort = loadFile('src/content/about-me-short.mdx')
	const aboutLong = loadFile('src/content/about-me-long.mdx')

	const aboutShortMdx = await serialize(aboutShort)
	const aboutLongMdx = await serialize(aboutLong)

	return {
		props: {
			aboutShort: aboutShortMdx,
			aboutLong: aboutLongMdx
		}
	}
}

export default App
