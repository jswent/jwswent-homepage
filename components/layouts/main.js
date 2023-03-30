import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width, inital-scale=1' />
        <title>James Swent - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW='container.md' pt={16}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
