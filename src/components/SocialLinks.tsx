import { Stack, type StackProps } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/system'
import { EmailIcon, GithubIcon, type IconType, LinkedInIcon, TwitterIcon } from '~/icons'
import { Link } from '~/components/Link'
import { SOCIAL_LINKS } from '~/constants/social-links'

interface SocialIconProps {
	href: string
	CustomIcon: IconType
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, CustomIcon }) => {
	const onHoverColor = useColorModeValue('pink.600', 'pink.500')
	return (
		<Link isExternal _hover={{ color: onHoverColor }} borderRadius='md' href={href}>
			<CustomIcon style={{ width: '2rem', height: '2rem' }} />
		</Link>
	)
}

export const SocialLinks: React.FC<StackProps> = props => {
	return (
		<Stack direction='row' justify={{ base: 'center', md: 'flex-start' }} spacing={4} {...props}>
			<SocialIcon CustomIcon={GithubIcon} href={SOCIAL_LINKS.github} />

			<SocialIcon CustomIcon={LinkedInIcon} href={SOCIAL_LINKS.linkedin} />

			<SocialIcon CustomIcon={TwitterIcon} href={SOCIAL_LINKS.twitter} />

			<SocialIcon CustomIcon={EmailIcon} href={SOCIAL_LINKS.email} />
		</Stack>
	)
}
