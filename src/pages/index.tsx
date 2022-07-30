import type { NextPage } from 'next'
import { Layout } from '~/layouts/main'
import { Me, Projects } from '~/views'

const App: NextPage = () => {
	return (
		<Layout>
			<Me />
			<Projects />
		</Layout>
	)
}

export default App
