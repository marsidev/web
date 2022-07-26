import { Button as ChakraButton, type ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
import { type HTMLMotionProps, motion } from 'framer-motion'

type Merge<P, T> = Omit<P, keyof T> & T

export type ButtonProps = Merge<ChakraButtonProps, HTMLMotionProps<'button'>>

export const Button: React.FC<ButtonProps> = motion(ChakraButton)

export default Button
