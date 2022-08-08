import type { BoxProps, FlexProps, StackProps } from '@chakra-ui/react'
import type { HTMLMotionProps } from 'framer-motion'
import { Box, Flex, Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export type MotionBoxProps = Merge<BoxProps, HTMLMotionProps<'div'>>
export const MotionBox: React.FC<MotionBoxProps> = motion(Box)

export type MotionFlexProps = Merge<FlexProps, HTMLMotionProps<'div'>>
export const MotionFlex: React.FC<MotionFlexProps> = motion(Flex)

export type MotionStackProps = Merge<StackProps, HTMLMotionProps<'div'>>
export const MotionStack: React.FC<MotionStackProps> = motion(Stack)
