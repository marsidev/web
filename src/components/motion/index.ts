import type { FlexProps, StackProps } from '@chakra-ui/layout'
import type { HTMLMotionProps } from 'framer-motion'
import { Flex, Stack } from '@chakra-ui/layout'
import { motion } from 'framer-motion'
import type { Merge } from '~/types/utils'

export type MotionFlexProps = Merge<FlexProps, HTMLMotionProps<'div'>>
export const MotionFlex: React.FC<MotionFlexProps> = motion(Flex)

export type MotionStackProps = Merge<StackProps, HTMLMotionProps<'div'>>
export const MotionStack: React.FC<MotionStackProps> = motion(Stack)
