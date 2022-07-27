import { Stack, type StackProps, useColorModeValue } from '@chakra-ui/react'
import { GithubIcon, Link, LinkedInIcon, TwitterIcon } from '~/components'

export const SocialLinks: React.FC<StackProps> = props => {
	const onHoverColor = useColorModeValue('pink.600', 'pink.500')

	return (
		<Stack
			direction='row'
			justify={{ base: 'center', md: 'flex-start' }}
			spacing={4}
			{...props}
		>
			<Link
				isExternal
				_hover={{ color: onHoverColor }}
				href='https://github.com/marsidev'
			>
				<GithubIcon className='social-link' />
			</Link>

			<Link
				isExternal
				_hover={{ color: onHoverColor }}
				href='https://www.linkedin.com/in/marsidev'
			>
				<LinkedInIcon className='social-link' />
			</Link>

			<Link
				isExternal
				_hover={{ color: onHoverColor }}
				href='https://twitter.com/marsigliacr'
			>
				<TwitterIcon className='social-link' />
			</Link>
		</Stack>
	)
}
