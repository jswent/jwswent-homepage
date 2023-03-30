import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Box,
  Text,
  Code
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/post'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Page = () => {
  return (
    <Layout title='MIT Startups to Watch Out for in 2023'>
      <Container>
        <Title>MIT Startups to Watch Out for in 2023</Title>
        <WorkImage src='/images/posts/mit-startups-23sp/sandbox.jpg' />
        <P>
          On Thursday I attended the MIT Sandbox 2023 Spring Showcase event. It
          was awesome to see how far so many of the teams I knew had come, as
          well as meet so many great founders. With that in mind, here are some
          of the teams I&apos;m really excited about for 2023.
        </P>
        <List ml={4} my={2} mb={8}>
          <ListItem>
            <Meta>Date</Meta>
            <span>March 18, 2023</span>
          </ListItem>
        </List>

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            Kino AI
          </Heading>
          <P>
          Kino is an AI assistant for tracking footage metadata and organizing your media assets. Kino solves the problem of organizing footage through automatic labeling, eliminating the problem of finding footage through a simple text-based search interface. 
          </P>
          <Box p='2' opacity='0' />
          <P>
          From their presentation, demonstration, and even the graphics, this team really stood out to me and I look forward to seeing where they will go!
          </P>
          <List ml={4} my={2}>
            <ListItem>
              <Meta>website</Meta>
              <Link href='https://trykino.com'>trykino.com</Link>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.2}>
          <Heading as='h2' variant='section-title'>
            Boston Quantum
          </Heading>
          <P>
          Boston Quantum (great name btw!) builds enterprise quantum computing software for the finance sector. This company is revolutionizing currency trading by building enterprise quantum computing software that uncovers multi-currency arbitrage opportunities in just milliseconds. Unlike classical methods, which are limited to detecting arbitrage between pairs of currencies, Boston Quantum&apos;s software employs cutting-edge quantum and quantum-inspired algorithms to rapidly identify and capitalize on the most profitable opportunities across 10 or more currencies.
          </P>
          <List ml={4} my={2}>
            <ListItem>
              <Meta>website</Meta>
              <Link href='https://www.bostonquantum.io'>bostonquantum.io</Link>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.3}>
          <Heading as='h2' variant='section-title'>
            Soundboard
          </Heading>
          <P>
          Another interesting startup is Soundboard, which has created an integrated platform for client management and billing without the need for an existing web infrastructure. This product is targeted towards one-person non-technical service providers like college counselors, electricians, plumbers, etc.
          </P>
        </Section>

        <Section delay={0.4}>
          <Heading as='h2' variant='section-title'>
            LastCharge Ventures
          </Heading>
          <P>
          This team is focused on building a cost-efficient lithium-ion energy storage system created from recycling mixed batteries, with the goal of making renewable power more accessible and sustainable. From partnering to responsible recyclers, using AI software to recover up to 54% of previously wasted battery capacity, and offering a mixed-battery modular energy storage system at a 50% cost discount, I&apos;m really excited to see where they go from here!
          </P>
        </Section>

        <Section delay={0.5}>
          <Heading as='h2' variant='section-title'>
            La Firme
          </Heading>
          <P>
          La Firme presents a really interesting solution which eanbles low and middle-income families in Latin America to access architectural and engineering services at an affordable cost by leveraging digital technologies and economies of scale. Through an engaging online experience, families can get an architectural design in less than 3  meetings. 
          </P>
          <List ml={4} my={2}>
            <ListItem>
              <Meta>website</Meta>
              <Link href='https://www.casalafirme.com'>casalafirme.com</Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
