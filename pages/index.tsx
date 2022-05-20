import { Box, Button, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return <Box minH={'100vh'}>
    <Text color='dark'>dark</Text>
    <Text color='muted'>muted</Text>
    <Heading as='h1'>header</Heading>
  </Box>
}

export default Home
