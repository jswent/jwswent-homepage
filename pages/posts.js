import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'

import thumbZSH from '../public/images/works/zsh_eyecatch.png'
import thumbTailwind from '../public/images/posts/tailwind-setup/tailwind_thumb.jpg'
import thumbChatGPT from '../public/images/posts/chatgpt-1/ChatGPT_logo.png'
import thumbLearnsight from '../public/images/posts/learnsight/logo.png'
import thumbFirebase from '../public/images/posts/firebase-setup/firebase_logo.jpg'

const Posts = () => (
  <Layout title='Posts'>
    <Container>
      <Heading as='h3' fontSize={20} mb={4}>
        Blog Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <PostGridItem 
            id='firebase-setup'
            title='How to Setup Firebase with React + Next.js'
            thumbnail={thumbFirebase}
          />
          <PostGridItem 
            id='learnsight'
            title='Starting a New Chapter...'
            thumbnail={thumbLearnsight}
          />
          <PostGridItem 
            id='chatgpt-1'
            title='Why Everyone is Talking About ChatGPT'
            thumbnail={thumbChatGPT}
          />
          <PostGridItem 
            id='tailwind-setup'
            title='How to set up TailwindCSS with React + Next.js'
            thumbnail={thumbTailwind}
          />
          <PostGridItem
            id='zsh'
            title='How To Configure ZSH From Scratch'
            thumbnail={thumbZSH}
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
