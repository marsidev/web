import type { NavContainerProps } from '.'
import type { FC } from 'react'
import { IconButton, Spacer, useColorMode } from '@chakra-ui/react'
import { BsMoonFill as MoonIcon, BsSunFill as SunIcon } from 'react-icons/bs'
import { useState } from 'react'
import { DesktopItems, MenuIcon, MobileItems, NavContainer } from '.'

export const Navbar: FC<NavContainerProps> = ({ ...props }) => {
  const { toggleColorMode, colorMode } = useColorMode()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <NavContainer {...props}>
        <MenuIcon
          display={['flex', 'none']}
          onClick={() => setIsOpen(!isOpen)}
        />

        <DesktopItems />

        <Spacer />

        <IconButton
          aria-label='Toggle theme'
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          ml={4}
          rounded='lg'
          onClick={toggleColorMode}
        />
      </NavContainer>

      <MobileItems display={isOpen ? ['flex', 'none'] : 'none'} />
    </>
  )
}

export default Navbar
