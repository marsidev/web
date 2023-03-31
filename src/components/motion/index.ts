import { Flex, FlexProps, Stack, StackProps } from '@chakra-ui/layout'
import { HTMLMotionProps, motion } from 'framer-motion'

export type MotionFlexProps = FlexProps & HTMLMotionProps<'div'>
export const MotionFlex = motion<FlexProps>(Flex)

export type MotionStackProps = StackProps & HTMLMotionProps<'div'>
export const MotionStack = motion<StackProps>(Stack)
