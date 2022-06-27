import type { ButtonProps } from '@chakra-ui/react'
import type { HTMLMotionProps } from 'framer-motion'
import type { Merge } from '@lib/types/merge'
import { FC } from 'react'
import { Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export type MotionButtonProps = Merge<ButtonProps, HTMLMotionProps<'button'>>

const MotionButton: FC<MotionButtonProps> = motion(Button)

export default MotionButton
