import type { BoxProps, StackProps } from '@chakra-ui/react'
import type { HTMLMotionProps } from 'framer-motion'
import { Box, Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { Merge } from '~/types'

export type MotionBoxProps = Merge<BoxProps, HTMLMotionProps<'div'>>
export const MotionBox: React.FC<MotionBoxProps> = motion(Box)

export type MotionStackProps = Merge<StackProps, HTMLMotionProps<'div'>>
export const MotionStack: React.FC<MotionStackProps> = motion(Stack)
