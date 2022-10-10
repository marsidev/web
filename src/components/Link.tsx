import type { LinkProps as NextLinkProps } from 'next/link'
import type { FC } from 'react'
import type { LinkProps as ChakraLinkProps } from '@chakra-ui/layout'
import { Link as ChakraLink } from '@chakra-ui/layout'
import { forwardRef } from '@chakra-ui/system'
import NextLink from 'next/link'

export type LinkProps = ChakraLinkProps & NextLinkProps

export const Link: FC<LinkProps> = forwardRef(
	({ href, children, ...props }, ref) => (
		<NextLink passHref href={href}>
			<ChakraLink ref={ref} {...props}>
				{children}
			</ChakraLink>
		</NextLink>
	)
)

export default Link
