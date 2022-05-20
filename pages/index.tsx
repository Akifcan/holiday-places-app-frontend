import { Grid, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import BaseContainer from '@/components/common/BaseContainer'
import CityBadge from '@/components/home/CityBadge'

const Home: NextPage = () => {
  return <BaseContainer>
    <Grid gridTemplateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']} gridGap={5} justifyItems='center'>
      <CityBadge />
      <CityBadge />
      <CityBadge />
      <CityBadge />
      <CityBadge />
      <CityBadge />
      <CityBadge />
      <CityBadge />
    </Grid>
  </BaseContainer>
}

export default Home
