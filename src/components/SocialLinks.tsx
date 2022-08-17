import { Stack, type StackProps, useColorModeValue } from '@chakra-ui/react'
import { EmailIcon, GithubIcon, LinkedInIcon, TwitterIcon } from '~/icons'
import { Link } from '~/components'
import { SOCIAL_LINKS } from '~/constants'

interface SocialIconProps {
	href: string
	icon: React.ReactNode
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => {
	const onHoverColor = useColorModeValue('pink.600', 'pink.500')
	return (
		<Link isExternal _hover={{ color: onHoverColor }} borderRadius='md' href={href}>
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
				href={SOCIAL_LINKS.github}
				icon={<GithubIcon className='social-link' />}
			/>

			<SocialIcon
				href={SOCIAL_LINKS.linkedin}
				icon={<LinkedInIcon className='social-link' />}
			/>

			<SocialIcon
				href={SOCIAL_LINKS.twitter}
				icon={<TwitterIcon className='social-link' />}
			/>

			<SocialIcon
				href={SOCIAL_LINKS.email}
				icon={<EmailIcon className='social-link' />}
			/>
		</Stack>
	)
}
