import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  List,
  ListItem,
  Link,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box p='2' opacity='0' />
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              James Swent
            </Heading>

            <p>
              Research Assistant and Computer Science student at the University
              of St. Andrews in Scotland
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align='center'
          >
            <Image
              borderColor='whiteAlpha.800'
              borderWidth={2}
              borderStyle='solid'
              maxWidth='100px'
              display='inline-block'
              borderRadius='full'
              src='/images/jswent.jpeg'
              alt='Profile Image'
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            Work
          </Heading>
          <Paragraph>
            James is currently a second-year at the University of St. Andrews
            and Research Intern at Transocean Ltd, with a passion for Computer
            Science, Open-Source software, and anything tech-related. He also
            does freelance software and web development, enjoying the process of
            solving real-life problems with code. James is also a foremost
            proponent of the data revolution, with experience designing and
            implementing relational databases on an enterprise scale.
          </Paragraph>
          <Box align='center' my={4}>
            <NextLink href='https://github.com/jswent'>
              <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
                My GitHub
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            Business
          </Heading>
          <Paragraph>
            James is also the founder of Swent Consulting, a web design and IT
            consulting agency that offers tailored services to primarily small
            businesses and charitable organizations. This agency is focused on
            making high-quality, modern web services and IT infrastructure
            available for affordable prices. Click the button below to explore
            the Swent Consulting website and reach out to get a personalized
            quote in less than 24 hours.
          </Paragraph>
          <Box align='center' my={4}>
            <NextLink href='https://www.swent-consulting.com'>
              <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
                Swent Consulting
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            Bio
          </Heading>
          <BioSection>
            <BioYear>2002</BioYear>
            Born in Boston, Massachusetts.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Graduated High School at Thayer Academy in Braintree, Massachusetts
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Started internship at Transocean Ltd.
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Studying Computer Science at the University of St. Andrews in
            Scotland
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Started research project in epidemic modelling with transfer
            learning at the University of St. Andrews
          </BioSection>
        </Section>

        <Section delay={0.4}>
          <Heading as='h3' variant='section-title'>
            Social Media
          </Heading>
          <List>
            <ListItem>
              <Link href='https://github.com/jswent' target='_blank'>
                <Button
                  variant='ghost'
                  colorScheme='teal'
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @jswent
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href='https://www.linkedin.com/in/james-swent-31811b231/'
                target='_blank'
              >
                <Button
                  variant='ghost'
                  colorScheme='teal'
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  James Swent
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href='https://www.instagram.com/jake_swent/'
                target={'_blank'}
              >
                <Button
                  variant='ghost'
                  colorScheme='teal'
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @jake_swent
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.5}>
          <Box
            borderRadius='lg'
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={3}
            mb={6}
            align='center'
          >
            This website was built to familiarize myself with React.js, Next.js,
            Chakra UI, and framer-motion, following Takuya Matsuyama&apos;s{' '}
            <Link href='https://www.youtube.com/watch?v=bSMZgXzC9AA'>
              How to build a portfolio website using Next.js, Chakra UI, Framer
              Motion, and Three.js
            </Link>
            .
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
