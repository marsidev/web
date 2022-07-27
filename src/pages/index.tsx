import type { NextPage } from 'next'
import { Layout } from '~/layouts/main'
import { Me } from '~/views'

const App: NextPage = () => {
	return (
		<Layout>
			<Me />
		</Layout>
	)
}

export default App
