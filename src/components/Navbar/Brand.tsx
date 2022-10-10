import { Flex } from '@chakra-ui/layout'
import { Link } from '~/components/Link'

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
