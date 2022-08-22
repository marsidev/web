import { Stack, type StackProps, VisuallyHidden, useColorModeValue } from '@chakra-ui/react'
import { EmailIcon, GithubIcon, LinkedInIcon, TwitterIcon } from '~/icons'
import { Link } from '~/components'
import { SOCIAL_LINKS } from '~/constants'

interface SocialIconProps {
	href: string
	icon: React.ReactNode
	alt: string
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, alt }) => {
	const onHoverColor = useColorModeValue('pink.600', 'pink.500')
	return (
		<Link
			isExternal
			_hover={{ color: onHoverColor }}
			borderRadius='md'
			href={href}
		>
			<VisuallyHidden>{alt}</VisuallyHidden>
			{icon}
		</Link>
	)
}

export const SocialLinks: React.FC<StackProps> = props => {
	return (
		<Stack
			direction='row'
			justify={{ base: 'center', md: 'flex-start' }}
			spacing={4}
			{...props}
		>
			<SocialIcon
				alt='GitHub profile link'
				href={SOCIAL_LINKS.github}
				icon={<GithubIcon className='social-link' />}
			/>

			<SocialIcon
				alt='LinkedIn profile link'
				href={SOCIAL_LINKS.linkedin}
				icon={<LinkedInIcon className='social-link' />}
			/>

			<SocialIcon
				alt='Twitter profile link'
				href={SOCIAL_LINKS.twitter}
				icon={<TwitterIcon className='social-link' />}
			/>

			<SocialIcon
				alt='Compose email link'
				href={SOCIAL_LINKS.email}
				icon={<EmailIcon className='social-link' />}
			/>
		</Stack>
	)
}
