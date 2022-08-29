import {
	Icon,
	Stack,
	type StackProps,
	VisuallyHidden,
	useColorModeValue
} from '@chakra-ui/react'
import {
	EmailIcon,
	GithubIcon,
	type IconType,
	LinkedInIcon,
	TwitterIcon
} from '~/icons'
import { Link } from '~/components/Link'
import { SOCIAL_LINKS } from '~/constants/social-links'

interface SocialIconProps {
	href: string
	CustomIcon: IconType
	alt: string
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, CustomIcon, alt }) => {
	const onHoverColor = useColorModeValue('pink.600', 'pink.500')
	return (
		<Link
			isExternal
			_hover={{ color: onHoverColor }}
			borderRadius='md'
			href={href}
		>
			<VisuallyHidden>{alt}</VisuallyHidden>
			<Icon as={CustomIcon} className='social-link' h={8} w={8} />
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
				CustomIcon={GithubIcon}
				alt='GitHub profile link'
				href={SOCIAL_LINKS.github}
			/>

			<SocialIcon
				CustomIcon={LinkedInIcon}
				alt='LinkedIn profile link'
				href={SOCIAL_LINKS.linkedin}
			/>

			<SocialIcon
				CustomIcon={TwitterIcon}
				alt='Twitter profile link'
				href={SOCIAL_LINKS.twitter}
			/>

			<SocialIcon
				CustomIcon={EmailIcon}
				alt='Compose email link'
				href={SOCIAL_LINKS.email}
			/>
		</Stack>
	)
}
