import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'

import thumbZSH from '../public/images/works/zsh_eyecatch.png'

const Posts = () => (
  <Layout title='Posts'>
    <Container>
      <Heading as='h3' fontSize={20} mb={4}>
        Blog Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
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
