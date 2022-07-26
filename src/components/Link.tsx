import { Link as ChakraLink, type LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = ChakraLinkProps & NextLinkProps

export const Link: React.FC<LinkProps> = ({ href, children, ...props }) => (
	<NextLink passHref href={href}>
		<ChakraLink {...props}>
			{children}
		</ChakraLink>
	</NextLink>
)

export default Link
