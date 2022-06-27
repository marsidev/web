import type { ReactNode, FC } from 'react'
import { Flex } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import seo from 'next-seo.config'
import { Footer } from '@components'

interface LayoutProps {
  children: ReactNode
  title?: string
}

const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <DefaultSeo title={title} {...seo} />

      {/* <Navbar h='10vh' /> */}
      <Flex
        alignItems='center'
        as='main'
        flex={1}
        flexDir='column'
        justify='center'
        minH='92vh'
        py={14}
        textAlign='center'
        w='100%'
      >
        {children}
      </Flex>
      <Footer h='8vh' />
    </>
  )
}

export default Layout
