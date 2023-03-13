import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Box,
  Text
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/post'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import CodeBlock from '../../components/code'

const Page = () => {
  return (
    <Layout title='Starting a New Chapter...'>
      <Container>
        <Title>
          Starting a New Chapter... <Badge>2023</Badge>
        </Title>
        <WorkImage src='/images/posts/learnsight/learnsight.png' />
        <P>
          I&apos;m excited to share that since January I&apos;ve started a new
          chapter in my life as the VP of Engineering at{' '}
          <Link href='https://www.learnsight.io'>Learnsight</Link>, a startup in
          the MIT Sandbox Innovation Fund Program. In my new role I will be
          responsible for leading development to deliver our MVP to early
          adopters. It&apos;s been an incredible journey so far, and I
          can&apos;t wait to share my experiences with you. As someone who has
          always been passionate about technology and entrepreneurship, joining
          a startup was a dream come true.
        </P>
        <List ml={4} my={2}>
          <ListItem>
            <Meta>Date</Meta>
            <span>February 18, 2023</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Page
