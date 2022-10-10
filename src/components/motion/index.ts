import type { BoxProps, StackProps } from '@chakra-ui/layout'
import type { HTMLMotionProps } from 'framer-motion'
import { Box, Stack } from '@chakra-ui/layout'
import { motion } from 'framer-motion'
import type { Merge } from '~/types/utils'

export type MotionBoxProps = Merge<BoxProps, HTMLMotionProps<'div'>>
export const MotionBox: React.FC<MotionBoxProps> = motion(Box)

export type MotionStackProps = Merge<StackProps, HTMLMotionProps<'div'>>
export const MotionStack: React.FC<MotionStackProps> = motion(Stack)
