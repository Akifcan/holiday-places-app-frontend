import { Grid, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import BaseContainer from '@/components/common/BaseContainer'
import CityBadge from '@/components/home/CityBadge'
import cities from '@/config/constants/cities'

const Home: NextPage = () => {
  return <BaseContainer breadcrumbItems={[{ label: 'Ana Sayfa', href: '/' }]}>
    <Grid gridTemplateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']} gridGap={5} justifyItems='center'>
      {cities.map((city, index) => {
        return <CityBadge name={city} index={index + 1} key={index} />
      })}
    </Grid>
  </BaseContainer>
}

export default Home
