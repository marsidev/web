import {
	StackDivider,
	type StackProps,
	VStack,
	useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { containerVariants, sideVariants } from '../variants'

interface MenuContainerProps extends StackProps {
	children: React.ReactNode
}

const MotionStack = motion(VStack)

export const MenuContainer: React.FC<MenuContainerProps> = ({
	children,
	...props
}) => {
	const bg = useColorModeValue('#fff', 'gray.800')
	const dividerColor = useColorModeValue('gray.200', 'gray.700')

	return (
		<MotionStack
			key='mobile-menu'
			animate='animate'
			as='nav'
			exit='exit'
			h='100vh'
			initial='initial'
			pos='fixed'
			variants={containerVariants}
			// w='100vw'
			zIndex={999}
			{...props}
		>
			<MotionStack
				align='left'
				animate='open'
				as='ul'
				bg={bg}
				divider={<StackDivider borderColor={dividerColor} />}
				initial='closed'
				justify='left'
				px={8}
				spacing={2}
				variants={sideVariants}
				w='100vw'
			>
				{children}
			</MotionStack>
		</MotionStack>
	)
}

export default MenuContainer
