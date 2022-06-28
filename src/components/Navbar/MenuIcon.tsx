import type { FC } from 'react'
import type { ChakraProps } from '@chakra-ui/react'
import { chakra, useColorModeValue } from '@chakra-ui/react'

interface MenuIconProps extends ChakraProps {
  onClick?: () => void
}

export const MenuIcon: FC<MenuIconProps> = ({ onClick, ...props }) => {
  const bg = useColorModeValue('gray.600', 'gray.400')

  return (
    <chakra.div {...props}>
      <input
        className='menu-input'
        id='checkbox'
        type='checkbox'
        onClick={onClick}
      />
      <label className='menu-label' htmlFor='checkbox' id='menu_label'>
        <button className='menu_btn'>
          <span className='menu-line-container top'>
            <chakra.div bg={bg} className='menu-line top' />
          </span>
          <span className='menu-line-container bottom'>
            <chakra.div bg={bg} className='menu-line bottom' />
          </span>
        </button>
      </label>
    </chakra.div>
  )
}

export default MenuIcon
