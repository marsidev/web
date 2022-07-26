import { Flex } from '@chakra-ui/react'
import { Link } from '~/components'

export const Brand = () => {
	return (
		<Flex align='center' justify='flex-start' minW='7em'>
			<Link href='/'>
				Luis <strong>Marsiglia</strong>
			</Link>
		</Flex>
	)
}

export default Brand
