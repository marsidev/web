import type { NextPage } from 'next'
import { Layout } from '~/layouts/main'
import { Cover, Projects } from '~/views'

const App: NextPage = () => {
	return (
		<Layout>
			<Cover />
			<Projects />
		</Layout>
	)
}

export default App
