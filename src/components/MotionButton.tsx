import type { MotionButtonProps } from '@components/motion/Button'
import { FC } from 'react'
import { Variants } from 'framer-motion'
import MotionButtton from '@components/motion/Button'

const variants: Variants = {
  initial: { scale: 1 },
  tap: { scale: 0.9, transition: { duration: 0.1, ease: 'easeOut' } }
}

export const MotionButton: FC<MotionButtonProps> = ({ children, ...props }) => {
  return (
    <MotionButtton initial='initial' variants={variants} whileTap='tap' {...props}>
      {children}
    </MotionButtton>
  )
}

export default MotionButton
