import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import '../public/styles/tailwind.css'
import TimedModal from '../components/timedmodal'
import Analytics from '../components/analytics'

// TODO: fix timeline CSS being unloaded preemptively
// without loading globally
import 'react-vertical-timeline-component/style.min.css'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Analytics />
      <Fonts />
      <TimedModal />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
