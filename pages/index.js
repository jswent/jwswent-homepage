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
              Founder & CEO of Swent Consulting
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
            I&apos;m currently working full-time at MIT&apos;s&nbsp;
            <Link href="https://sandbox.mit.edu">Sandbox Innovation Fund Program</Link>.
            I also run my own technical consulting firm&nbsp;
            <Link href="https://www.swent-consulting.com">Swent Consulting</Link>.
            I get excited about Computer Science, Open-Source software,
            and anything tech-related. I&apos;m passionate about
            building new ventures, exploring entrepreneurship, and
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
            Digitall Uplift
          </Heading>
          <Paragraph>
            I&apos;m also the founder of Digitall Uplift, an accelerator for
            social ventures which, instead of providing dilutive funding, provides
            expert technical resources and advising through a network of developers
            and mentors wishing to volunteer their time. If you&apos;re interested in
            volunteering or applying to our cohort, click the button below
            to find out more!
          </Paragraph>
          <Box align='center' my={4}>
            <NextLink href='https://www.digitalluplift.org'>
              <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
                Digitall Uplift
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
            the status of your subscription{' '}
            <NextLink href='/manage'>
              <Link>here</Link>
            </NextLink>
            .
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
