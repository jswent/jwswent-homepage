import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbZSH from '../public/images/works/zsh_eyecatch.png'
import thumbSVim from '../public/images/works/svim.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as='h3' fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <WorkGridItem id='svim' title='SVim' thumbnail={thumbSVim}>
            A complete IDE layer for Neovim with code autocompletion, syntax
            highlighting, LSP, fuzzy search, and more. 
          </WorkGridItem>
          <WorkGridItem id='zsh' title='ZSH' thumbnail={thumbZSH}>
            A fast, extensible ZSH configuration with fish-like syntax
            highlighting and autosuggestions, all without the bloat of
            oh-my-zsh.
          </WorkGridItem>
        </SimpleGrid>
        <Section />
      </Container>
    </Layout>
  )
}

export default Works
