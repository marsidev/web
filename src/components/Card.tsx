import { FC } from 'react'
import { Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { Link } from '@components'

interface CardProps {
  /** Href to navigate when interected. Required. */
  href: string
  /** Tittle of the card. Required. */
  title: string
  /** Description of the card. Optional. */
  description?: string
}

export const Card: FC<CardProps> = ({ href, title, description }) => {
  const bg = useColorModeValue('pink.500', 'pink.200')
  const hoverBg = useColorModeValue('pink.600', 'pink.300')
  const fontColor = useColorModeValue('white', 'gray.800')

  return (
    <Link
      isExternal
      _active={{ bg: hoverBg }}
      _hover={{ bg: hoverBg }}
      bg={bg}
      borderRadius={12}
      color={fontColor}
      h='180px'
      href={href}
      m={4}
      maxW='340px'
      p={6}
      textAlign='left'
      transition='0.15s all ease-in-out'
    >
      <article>
        <Heading as='h2' fontSize='2xl'>
          {title} &rarr;
        </Heading>
        <Text fontSize='lg'>{description}</Text>
      </article>
    </Link>
  )
}

export default Card
