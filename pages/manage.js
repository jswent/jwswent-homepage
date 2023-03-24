import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { ManageUnlogged, ManageLogged } from '../components/manage'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { auth } from '../components/firebase'

const variants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.6,
    },
  },
  hide: {
    y: -20,
    opacity: 0,
  },
};

const Page = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user)
      setUser(user)
    })
  })

  return (
    <Layout title='Manage'>
      <Container className='mb-20'>
        <Heading as='h3' variant='section-title'>
          Manage
        </Heading>
        <motion.div key={user} variants={variants} animate={"show"} initial="hide">
          {user == null && <ManageUnlogged />}
          {user && <ManageLogged user={user} />}
        </motion.div>
      </Container>
    </Layout>
  )
}

export default Page
