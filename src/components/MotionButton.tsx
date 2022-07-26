import { Variants } from 'framer-motion'
import { Button, type ButtonProps } from '~/components/motion/Button'

const variants: Variants = {
	initial: { scale: 1 },
	tap: { scale: 0.9, transition: { duration: 0.1, ease: 'easeOut' } }
}

export const MotionButton: React.FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<Button initial='initial' variants={variants} whileTap='tap' {...props}>
			{children}
		</Button>
	)
}

export default MotionButton
