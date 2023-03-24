import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import NewsModal from './newsmodal'
import { setSessionDisplayed } from './persistent'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleOpenModal = () => {
    setSessionDisplayed(true)
    onOpen()
  }

  return (
    <>
      <NewsModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Box
        position='fixed'
        as='nav'
        w='100%'
        bg={useColorModeValue('#ffffff40', '#20202380')}
        css={{ backdropFilter: 'blur(10px)' }}
        zIndex={2}
        {...props}
      >
        <Container
          display='flex'
          p={2}
          maxW='container.md'
          wrap='wrap'
          align='center'
          justify='space-between'
        >
          <Flex align='center' mr={5}>
            <Heading as='h1' size='lg' letterSpacing={'tighter'}>
              <Logo />
            </Heading>
          </Flex>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems='center'
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem href='/works' path={path}>
              Works
            </LinkItem>
            <LinkItem href='/posts' path={path}>
              Posts
            </LinkItem>
            <LinkItem href='' onClick={handleOpenModal} path={path}>
              Subscribe
            </LinkItem>
            <LinkItem
              target='_blank'
              href='https://github.com/jswent/jwswent-homepage'
              path={path}
              display='inline-flex'
              alignItems='center'
              style={{ gap: 4 }}
              pl={2}
            >
              <IoLogoGithub />
              Source
            </LinkItem>
          </Stack>

          <Box flex={1} align='right'>
            <ThemeToggleButton />

            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu isLazy id='navbar-menu'>
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant='outline'
                  aria-label='Options'
                />
                <MenuList>
                  <NextLink href='/' passHref>
                    <MenuItem as={Link}>About</MenuItem>
                  </NextLink>
                  <NextLink href='/works' passHref>
                    <MenuItem as={Link}>Works</MenuItem>
                  </NextLink>
                  <NextLink href='/posts' passHref>
                    <MenuItem as={Link}>Posts</MenuItem>
                  </NextLink>
                  <MenuItem as={Link} onClick={handleOpenModal}>
                    Subscribe
                  </MenuItem>
                  <NextLink href='/manage' passHref>
                    <MenuItem as={Link}>Manage</MenuItem>
                  </NextLink>
                  <MenuItem
                    as={Link}
                    href='https://github.com/jswent/jwswent-homepage'
                  >
                    <IoLogoGithub /> <Box p='1' opacity='0' /> View Source
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Navbar
