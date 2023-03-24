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
  Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Experience from '../components/experience'
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

            <Heading as='h3' size='md'>
              VP Engineering at Learnsight
            </Heading>
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
            I&apos;m currently working full-time as VP of Engineering at&nbsp;
            <Link href='https://www.learnsight.io'>Learnsight</Link>, a startup
            in the MIT Sandbox program. I&apos;m also a second-year at the
            University of St. Andrews. I get excited about Computer Science,
            Open-Source software, and anything tech-related. I&apos;m passionate
            about building new ventures, exploring entrepreneurship, and
            leveraging my tech insights to enhance legacy industries.
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
            Consulting
          </Heading>
          <Paragraph>
            I&apos;m also the founder of Swent Consulting, a web design and IT
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
          <Experience />
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
          <Heading as='h3' variant='section-title'>
            Newsletter
          </Heading>
          <Paragraph>
            If you would like to unsubscribe from my newsletter, you can manage
            the status of your subscription <Link href='/manage'>here</Link>.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
