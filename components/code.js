import { Code, Box, useColorModeValue } from '@chakra-ui/react'

export function InlineCode({ children }) {
  return (
    <Code className='indent-0'>
      {children}
    </Code>
  )
}

const CodeBlock = ({ className, children }) => {
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
      className={className}
    >
      <Code m='4px' display='block' whiteSpace='pre' bg='transparent'>
        {children}
      </Code>
    </Box>
  )
}

export default CodeBlock
