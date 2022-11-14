import { Stack, type StackProps } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/system'
import { EmailIcon, GithubIcon, type IconType, LinkedInIcon, TwitterIcon } from '~/icons'
import { Link } from '~/components/Link'
import { SOCIAL_LINKS } from '~/constants/social-links'

interface SocialIconProps {
	href: string
	CustomIcon: IconType
	size?: 'md' | 'sm'
}

interface SocialLinksProps extends StackProps {
	size?: 'md' | 'sm'
	exclude?: Array<'github' | 'twitter' | 'linkedin' | 'email'>
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, CustomIcon, size = 'md' }) => {
	const onHoverColor = useColorModeValue('pink.600', 'pink.500')
	const dim = size === 'md' ? '2rem' : '1.6rem'

	return (
		<Link isExternal _hover={{ color: onHoverColor }} borderRadius='md' href={href}>
			<CustomIcon style={{ width: dim, height: dim }} />
		</Link>
	)
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ size, exclude, ...props }) => {
	return (
		<Stack direction='row' justify={{ base: 'center', md: 'flex-start' }} spacing={4} {...props}>
			{!exclude?.includes('github') && (
				<SocialIcon CustomIcon={GithubIcon} href={SOCIAL_LINKS.github} size={size} />
			)}

			{!exclude?.includes('linkedin') && (
				<SocialIcon CustomIcon={LinkedInIcon} href={SOCIAL_LINKS.linkedin} size={size} />
			)}

			{!exclude?.includes('twitter') && (
				<SocialIcon CustomIcon={TwitterIcon} href={SOCIAL_LINKS.twitter} size={size} />
			)}

			{!exclude?.includes('email') && (
				<SocialIcon CustomIcon={EmailIcon} href={SOCIAL_LINKS.email} size={size} />
			)}
		</Stack>
	)
}
