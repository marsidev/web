import type { FC } from 'react'
import type { StackProps } from '@chakra-ui/react'
import { HStack, Spacer } from '@chakra-ui/react'
import { Link } from '@components'
import { NavItem } from '.'

export const DesktopItems: FC<StackProps> = ({ ...props }) => {
  return (
    <HStack
      align='center'
      as='nav'
      display={['none', 'flex']}
      h='auto'
      w='100%'
      {...props}
    >
      <Link href='/'>Luis Marsiglia</Link>

      <Spacer />

      <HStack spacing={4}>
        <NavItem href='/about'>About</NavItem>
        <NavItem href='/projects'>Projects</NavItem>
        <NavItem href='/contact'>Contact</NavItem>
      </HStack>
    </HStack>
  )
}

export default DesktopItems
