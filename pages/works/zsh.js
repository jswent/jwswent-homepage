import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title='ZSH'>
      <Container>
        <Title>
          ZSH <Badge>2022</Badge>
        </Title>
        <P>
          My ZSH config is designed to be completely no-compromises: fast,
          minimal, and easily extensible with all the features of a modern
          terminal. This config suports interoperability with Oh-My-ZSH themes
          and plugins out of the box, and uses the same simple config options
          found in OMZ.
        </P>
        <List ml={4} my={4}>
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
          <ListItem>
            <Meta>Blog Post</Meta>
            <Link href='/posts/zsh'>
              How to configure ZSH from scratch <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
        </List>

          <WorkImage />
        {/*<WorkImage src="/images/works/zsh_01.png" alt="ZSH" />*/}
      </Container>
    </Layout>
  )
}

export default Work
