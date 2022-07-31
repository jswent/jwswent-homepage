import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Box,
  Code,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/post'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Post = () => {
  return (
    <Layout title='ZSH'>
      <Container>
        <Title>
          How To Configure ZSH From Scratch <Badge>2022</Badge>
        </Title>
        <P>
          This article will demonstrate how to configure z-shell (ZSH)
          completely from scratch, without having to rely on Oh-My-ZSH for
          coloring, plugin management, and themes. Oh-My-ZSH is a great tool but
          is very bloated, and contains many unnecessary add-ons and aliases
          that most users will never use. Instead, I will teach you how to do
          this yourself, and gain a higher control over your shell environment.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>README</Meta>
            <Link href='https://github.com/jswent/zsh/blob/main/README.md'>
              GitHub <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>macOS/Linux/WSL</span>
          </ListItem>
        </List>

        <Box p='2' opacity='0' />
        <Heading as='h3' variant='section-title'>
          Initial Prompt
        </Heading>
        <P>
          When first launching a zsh terminal on macOS, you will be greeted with
          a prompt that looks like the one below. If you are on a Linux system
          and installed ZSH from your local package manager, you will likely see
          something even more stripped down.
        </P>

        <WorkImage src='/images/posts/zsh/termInit.png' alt='termInit' />
        <P>
          By default, ZSH has no built-in configuration options (macOS includes
          a few), so we will have to enable logging, colors, and completion by
          ourselves. Let&apos;s start with the basics:
        </P>

        <Box p='2' opacity='0' />
        <Heading as='h3' variant='section-title'>
          Create ZSH Configuration Directory
        </Heading>
        <P>
          First we will want to create a new directory to store our
          configuration files, as I prefer to minimize the amount of dotfiles in
          my home directory. To achieve this we will create the ~/.zsh
          directory, and symlink ~/.zsh/.zshrc to ~/.zshrc.
        </P>
        <WorkImage src='/images/posts/zsh/zshDirSetup.png' alt='zshDirSetup' />

        <Heading as='h3' variant='section-title'>
          Colorize the Prompt
        </Heading>
        <P>
          As ZSH does not load colors by default, we will need to enable them
          manually. For most operating systems it is also necessary to
          initialize the CLICOLOR and LSCOLOR environment variables, which can
          be seen below.
        </P>
        <Box p='1' opacity='0' />
        <Meta>~/.zshrc</Meta>
        <Box p='1' opacity='0' />
        <Box
          borderRadius='lg'
          bg={useColorModeValue('codeLight', 'codeDark')}
          overflowX='scroll'
        >
          <Code display='block' whiteSpace='pre' bg='transparent'>
            <p>
              ## Load colors <br />
              autoload -U colors && colors <br />
              <br />
              ## Enable colored output <br />
              export CLICOLOR=1 <br />
              export LSCOLORS=ExFxBxDxCxegedabagacad <br />
            </p>
          </Code>
        </Box>
        <Box p='2' opacity='0' />
        <P>
          To utilize colored output on command-line applications, some systems
          will require the --color flag to be explicity specified. To fix this,
          we will create a new ~/.zsh/aliases file that will contain aliases
          specifying colored output. Note that this is not required on macOS
          systems.
        </P>
        <Box p='1' opacity='0' />
        <Meta>~/.zsh/aliases</Meta>
        <Box p='1' opacity='0' />
        <Box
          borderRadius='lg'
          bg={useColorModeValue('codeLight', 'codeDark')}
          overflowX='scroll'
        >
          <Code display='block' whiteSpace='pre' bg='transparent'>
            <Text># Colorful ZSH</Text>
            <Text>if [ -x /usr/bin/dircolors ]; then</Text>
            <Text>
              {'  '}
              test -r ~/.dircolors && eval &quot;$dircolors -n
              ~/.dircolors&quot; || eval &quot;$(dircolors -b)&quot;
            </Text>
            <Text>{'  '}alias dir=&apos;dir --color=auto&apos;</Text>
            <Text>
              {'  '}alias ls=&apos;ls --color=auto&apos; #do not include if
              using exa
            </Text>
            <Text>{'  '}alias grep=&apos;grep --color=auto&apos;</Text>
            <Text>fi</Text>
          </Code>
        </Box>
        <Box p='1' opacity='0' />
        <P>Now make sure to source the file from your .zshrc</P>
        <Box p='1' opacity='0' />
        <Meta>~/.zshrc</Meta>
        <Box p='1' opacity='0' />
        <Box
          borderRadius='lg'
          bg={useColorModeValue('codeLight', 'codeDark')}
          overflowX='scroll'
        >
          <Code display='block' whiteSpace='pre' bg='transparent'>
            <Text># source aliases</Text>
            <Text>source $ZSH/aliases</Text>
          </Code>
        </Box>

        <Box p='2' opacity='0' />
        <Heading as='h3' variant='section-title'>
          Enable ZSH History Logging
        </Heading>
        <P>
          To enable persistent history logging, we will have to set a few
          environemnt variables. I also like to specify the location of the
          history file inside of my ~/.zsh directory, instead of in the home
          directory.
        </P>
        <Box p='1' opacity='0' />
        <Meta>~/.zshrc</Meta>
        <Box p='1' opacity='0' />
        <Box
          borderRadius='lg'
          bg={useColorModeValue('codeLight', 'codeDark')}
          overflowX='scroll'
        >
          <Code display='block' whiteSpace='pre' bg='transparent'>
            <p>
              ## ZSH HISTORY export
              <br />
              HISTFILE=$ZSH/.zsh_history
              <br />
              export HISTSIZE=100000000
              <br />
              export SAVEHIST=100000000
              <br />
              setopt appendhistory
              <br />
              setopt HIST_IGNORE_ALL_DUPS
              <br />
              setopt HIST_FIND_NO_DUPS
              <br />
            </p>
          </Code>
        </Box>
        <Box p='2' opacity='0' />
        <Heading as='h3' variant='section-title'>
          Install Plugins Without Oh-My-ZSH (zsh-autosuggestions &
          zsh-syntax-highlighting)
        </Heading>
        <P>
          While Oh-My-ZSH may abstract over the task of sourcing plugins,
          manually installing them require barely an extra line in your .zshrc.
          Simply create a plugins directory and clone the desired repos. If
          you&apos;re interested on how to create a lightweight plugin manager
          that can automatically source OMZ plugins, view my article{' '}
          <Link href='/posts/zpm'>
            How To Create Your Own ZSH Plugin Manager
          </Link>
          .
        </P>
        <WorkImage src='/images/posts/zsh/zshPluginsInstall.png' />
        <P>And now just source the specified files in your zsh config file.</P>
        <Box p='1' opacity='0' />
        <Meta>~/.zshrc</Meta>
        <Box p='1' opacity='0' />
        <Box
          borderRadius='lg'
          bg={useColorModeValue('codeLight', 'codeDark')}
          overflowX='scroll'
        >
          <Code display='block' whiteSpace='pre' bg='transparent'>
            <p>
              # Source plugins <br />
              source
              &apos;$ZSH/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh&apos;{' '}
              <br />
              source
              &apos;$ZSH/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh&apos;{' '}
              <br />
            </p>
          </Code>
        </Box>
        <Box p='2' opacity='0' />
        <P>And your new shell should look like this:</P>
        <WorkImage src='/images/posts/zsh/zshPluginTest.png' />
      </Container>
    </Layout>
  )
}

export default Post
