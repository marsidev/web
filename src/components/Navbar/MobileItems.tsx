import type { FC } from 'react'
import type { StackProps } from '@chakra-ui/react'
import { StackDivider, VStack, useColorModeValue } from '@chakra-ui/react'
import { NavItem } from '.'

export const MobileItems: FC<StackProps> = ({ ...props }) => {
  const dividerColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <VStack
      align='left'
      as='nav'
      divider={<StackDivider borderColor={dividerColor} />}
      justify='left'
      maxW='2xl'
      px={8}
      w='100%'
      {...props}
    >
      <NavItem href='/about'>About</NavItem>
      <NavItem href='/projects'>Projects</NavItem>
      <NavItem href='/contact'>Contact</NavItem>
    </VStack>
  )
}

export default MobileItems
