import { FC } from 'react'
import BaseContainer from '@/components/common/BaseContainer'
import { useRouter } from 'next/router'
import PlaceCard from '@/components/city/PlaceCard'

const CityPlaces: FC = () => {

    const router = useRouter()


    return <BaseContainer breadcrumbItems={[
        { label: 'Ana Sayfa', href: '/' },
        { label: router.query.name as string || '', href: `/city/${router.query.name as string}` },
    ]}>
        <PlaceCard />
    </BaseContainer>
}

export default CityPlaces