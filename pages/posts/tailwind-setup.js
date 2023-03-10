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
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/post'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import CodeBlock from '../../components/code'

const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
`

const contentConfig = `content: ['./src/**/*.{js,jsx}'],`

const myApp = `import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
`;

const Post = () => {
  return (
    <Layout title='How To Setup TailwindCSS with React + Next.js'>
      <Container>
        <Title>
          How To Setup TailwindCSS with React + Next.js <Badge>2023</Badge>
        </Title>
        <P>
          This article will demonstrate how to setup TailwindCSS with React and
          Next.js for both new projects and existing. TailwindCSS is a geat tool
          which significantly increases the efficiency of styling without ever
          having to leave your HTML code. On top of that, it compiles back into
          pure CSS so in most cases it adds barely any additional package size
          to your project.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Date</Meta>
            <span>January 12, 2023</span>
          </ListItem>
          <ListItem>
            <Meta>Repo</Meta>
            <Link href='https://github.com/jswent/tailwind-example'>
              GitHub <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Prerequesites</Meta>
            <span>ReactJS 18.2, Next.js 13, TypeScript (optional)</span>
          </ListItem>
        </List>

        <Box p='2' opacity='0' />
        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            For a New Project
          </Heading>
          <p>
            If you&apos;re creating a new project, the easiest way to setup
            Tailwind is by using the official Next.js example from{' '}
            <Link href='https://nextjs.org/docs/api-reference/create-next-app'>
              Create Next App
            </Link>
            .
          </p>
          <Box p='2' opacity='0' />
          <CodeBlock>
            npx create-next-app@latest -e with-tailwindcss tailwind-example
          </CodeBlock>
          <Box p='2' opacity='0' />
          <p>
            This will automatically setup Tailwind and install its dependencies
            from the official Next.js example. In the following section we will
            cover manually installing Tailwind in an existing project.
          </p>
        </Section>

        <Box p='2' opacity='0' />
        <Section delay={0.2}>
          <Heading as='h2' variant='section-title'>
            For an Existing Project
          </Heading>
          <Heading as='h3' size='md' mb={2}>
            Install Packages
          </Heading>
          <p>
            First, start by installing Tailwind and its dependencies through
            your package manager of choice (npm, yarn):
          </p>
          <Box p='2' opacity='0' />
          <CodeBlock>
            # If you&apos;re on Next.js v10 or newer
            <br />
            npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
            <br />
            <br />
            # If you&apos;re on Next.js v9 or older
            <br />
            npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat
            postcss@^7 autoprefixer@^9
            <br />
          </CodeBlock>
        </Section>

        <Section delay={0.3}>
          <Heading as='h3' size='md' mb={2}>
            Create Tailwind Configuration Files
          </Heading>
          <p>
            Next, execute the tailwindcss package binary to generate the{' '}
            <Code>tailwind.config.js</Code> and <Code>postcss.config.js</Code>{' '}
            files.
          </p>
          <Box p='2' opacity='0' />
          <CodeBlock>npx tailwindcss init -p</CodeBlock>
          <Text my={2}>
            This will create a template <Code>tailwind.config.js</Code> in your
            project&apos;s root directory:
          </Text>
          <CodeBlock>{tailwindConfig}</CodeBlock>
          <Text my={2}>
            Now here is where we want to change the content field to tell
            tailwind where to look. In my case I&apos;m using a <Code>src</Code>{' '}
            directory so I only have to specify one path, but if you&apos;re
            using multiple directories for pages, components, etc. make sure to
            include them all!
          </Text>
          <CodeBlock>{contentConfig}</CodeBlock>
        </Section>

        <Section delay={0.4}>
          <Heading as='h3' size='md' mb={2}>
            Add Tailwind to CSS
          </Heading>
          <Text my={2}>
            Navigate to the directory where you&apos;re CSS files are located, I
            keep mine under the <Code>src/styles</Code> directory. Create a new
            file called <Code>tailwind.css</Code>. This is where the compiled
            tailwind styles will be injected into.
          </Text>
          <Meta>tailwind.css</Meta>
          <Box p='1' opacity='0' />
          <CodeBlock>
            @tailwind base; <br />
            @tailwind components; <br />
            @tailwind utilities; <br />
          </CodeBlock>
        </Section>

        <Section delay={0.5}>
          <Heading as='h3' size='md' mb={2}>
            Load CSS in App Component
          </Heading>
          <Text my={2}>
            Now we need to make sure the new CSS file is being loaded globally. In your <Code>pages/_app.js</Code> component, make sure you import the <Code>tailwind.css</Code> files.
          </Text>
          <Meta>pages/_app.js</Meta>
          <Box p='1' opacity='0' />
          <CodeBlock>{myApp}</CodeBlock>
        </Section>

        <Section delay={0.6}>
          <Heading as='h2' variant='section-title'>
            You&apos;re done!
          </Heading>
          <Text>
            All you need to do is make sure to you reload your development server by running <Code>npm run dev</Code> or <Code>yarn dev</Code>.
          </Text>
        </Section>
      </Container>
    </Layout>
  )
}

export default Post
