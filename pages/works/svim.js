import {
  Badge,
  Link,
  Container,
  List,
  ListItem,
  Heading
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Meta, Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Section from '../../components/section'
import CodeBlock, { InlineCode } from '../../components/code'

const Work = () => {
  return (
    <Layout title='SVim'>
      <Container>
        <Title>
          SVim <Badge>2022</Badge>
        </Title>
        <WorkImage src='/images/works/alpha-svim.png' />
        <P>
          SVim is a complete IDE layer built around Neovim, featuring all the
          expected functionalities of a modern text editor. Code autocompletion,
          syntax highlighting, git integration, and Telescope file browsing just
          to name a few. There is also LSP support built-in with Mason.nvim, as
          well as many of the common languages (JS/TS, C/C++, Java, Python, Go,
          Rust, etc.) pre-configured out of the box.
        </P>
        <List ml={4} my={4} mb={8}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://github.com/jswent/zsh'>
              GitHub <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>macOS/Linux/WSL</span>
          </ListItem>
        </List>

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            Installation
          </Heading>
          <P>
            To install this config, simply clone the SVim repository to your{' '}
            <InlineCode>nvim</InlineCode> directory. Then once the program is
            initialized, run the <InlineCode>:PackerSync</InlineCode> command to
            install the required packages. Give it some time to install
            everything and then restart neovim again. You may have to restart
            neovim multiple times before it loads properly.
          </P>
          <CodeBlock className='mt-4'>
            git clone https://github.com/jswent/SVim.git ~/.config/nvim
          </CodeBlock>
        </Section>
      </Container>
    </Layout>
  )
}

export default Work
