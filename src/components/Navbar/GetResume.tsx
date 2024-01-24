import { chakra } from '@chakra-ui/system'
import { DocIcon } from '~/icons'
import { Link } from '../Link'

export const GetResume = () => {
	return (
		<Link
			isExternal
			_active={{
				bgPosition: 'right center'
			}}
			_hover={{
				bgPosition: 'right center'
			}}
			alignItems='center'
			bgGradient='linear(-45deg, pink.600 0%, pink.400 50%, pink.600 100%)'
			bgSize='200% auto'
			color='white'
			display='inline-flex'
			fontWeight='600'
			href='https://bit.ly/marsicv'
			px={4}
			py={2}
			rounded='lg'
			transition='all 300ms ease-in-out'
		>
			<DocIcon />
			<chakra.span ml={2}>Get my resume</chakra.span>
		</Link>
	)
}

export default GetResume
