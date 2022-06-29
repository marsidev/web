import type { FC } from 'react'
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = ChakraLinkProps & NextLinkProps

export const Link: FC<LinkProps> = ({ href, children, textDecoration = 'none', ...props }) => (
	<NextLink passHref href={href}>
		<ChakraLink _hover={{ textDecoration }} {...props}>
			{children}
		</ChakraLink>
	</NextLink>
)

export default Link
