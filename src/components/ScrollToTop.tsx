import { IconButton, type IconButtonProps, useBreakpointValue } from '@chakra-ui/react'
import { useScrollY } from '@marsidev/react-hooks'
import { ArrowUpIcon } from '~/icons'

export interface ScrollToTopProps extends Omit<IconButtonProps, 'aria-label'> {
	offset?: number
	bottom?: number | string
	right?: number | string
	'aria-label'?: string
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({
	offset = 400,
	bottom,
	right,
	...props
}) => {
	const respRight = useBreakpointValue({ base: 4, sm: 8, md: 12, lg: 20 })
	const respBottom = useBreakpointValue({ base: 4, sm: 8, md: 8, lg: 8 })
	const { offsetPassed } = useScrollY(offset)

	const scrollToTop = () =>
		window.scroll({
			top: 0,
			behavior: 'smooth'
		})

	return (
		<IconButton
			aria-label='Scroll to top'
			bottom={bottom || respBottom}
			colorScheme='pink'
			icon={<ArrowUpIcon />}
			isRound={true}
			opacity={offsetPassed ? '1' : '0'}
			pos='fixed'
			right={right || respRight}
			title='Scroll to top'
			transform={offsetPassed ? '' : 'translateY(100%)'}
			zIndex='overlay'
			onClick={scrollToTop}
			{...props}
		/>
	)
}

export default ScrollToTop
