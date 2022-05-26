import { FC, useEffect, useState } from 'react'
import BaseContainer from '@/components/common/BaseContainer'
import { useRouter } from 'next/router'
import PlaceCard from '@/components/city/PlaceCard'
import { Grid } from '@chakra-ui/react'
import PLACES_QUERY, { PlacesQueryProps } from '@/apollo/quaries/places'
import { useLazyQuery } from '@apollo/client'
import PaginatedQueryProps from '@/apollo/interface/paginatedQuery.interface'

const CityPlaces: FC = () => {

    const router = useRouter()

    const [getPlaces, { data: placesData }] = useLazyQuery<{ places: PaginatedQueryProps<PlacesQueryProps[]> }>(PLACES_QUERY)
    const [currentPage, setCurrentPage] = useState(1)
    const [places, setPlaces] = useState<PlacesQueryProps[]>([])

    useEffect(() => {
        if (!placesData) return
        setPlaces(placesData.places.data)
    }, [placesData])

    useEffect(() => {
        if (!router.query.name) return
        getPlaces({
            variables: {
                province: (router.query.name as string).replaceAll('i̇', 'i'),
                page: currentPage
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router, currentPage])

    return <BaseContainer breadcrumbItems={[
        { label: 'Ana Sayfa', href: '/' },
        { label: router.query.name as string || '', href: `/city/${router.query.name as string}` },
    ]}>
        <Grid gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']} justifyItems='center' gridGap={5}>
            {places.map(place => {
                return <PlaceCard place={place} key={place._id} />
            })}
        </Grid>
    </BaseContainer>
}

export default CityPlaces