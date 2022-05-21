import { FC } from 'react'
import BaseContainer from '@/components/common/BaseContainer'
import { useRouter } from 'next/router'
import PlaceCard from '@/components/city/PlaceCard'
import { Grid } from '@chakra-ui/react'

const CityPlaces: FC = () => {

    const router = useRouter()

    return <BaseContainer breadcrumbItems={[
        { label: 'Ana Sayfa', href: '/' },
        { label: router.query.name as string || '', href: `/city/${router.query.name as string}` },
    ]}>
        <Grid gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']} justifyItems='center' gridGap={5}>
            <PlaceCard />
            <PlaceCard />
            <PlaceCard />
            <PlaceCard />
            <PlaceCard />
            <PlaceCard />
            <PlaceCard />
        </Grid>
    </BaseContainer>
}

export default CityPlaces