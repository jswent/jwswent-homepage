import { Code, Box, useColorModeValue } from '@chakra-ui/react'

const CodeBlock = ({ children }) => {
  return (
    <Box
      sx={{
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}
      borderRadius='lg'
      bg={useColorModeValue('codeLight', 'codeDark')}
      overflowX='scroll'
    >
      <Code m='4px' display='block' whiteSpace='pre' bg='transparent'>
        {children}
      </Code>
    </Box>
  )
}

export default CodeBlock
