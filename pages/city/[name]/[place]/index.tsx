import { FC } from 'react'
import BaseContainer from '@/components/common/BaseContainer'
import { useRouter } from 'next/router'
import { Grid, VStack, Box } from '@chakra-ui/react'
import PlaceCard from '@/components/city/PlaceCard'
import CommentCard from '@/components/detail/CommentCard'
import RateInfo from '@/components/detail/RateInfo'
import Rates from '@/components/detail/Rates'
import CreateComment from '@/components/detail/CreateComment'

const PlaceDetail: FC = () => {

    const router = useRouter()

    return <BaseContainer breadcrumbItems={[
        { label: 'Ana Sayfa', href: '/' },
        { label: router.query.name as string || '', href: `/city/${router.query.name as string}` },
        { label: router.query.place as string || '', href: `/city/${router.query.place as string}` },
    ]}>
        <Grid gridTemplateColumns={'300px 1fr'} gridGap={5}>
            <Box alignSelf={'flex-start'} position='sticky' top={2}>
                <PlaceCard />
                <RateInfo />
            </Box>
            <VStack alignItems={'stretch'}>
                <Rates />
                <CreateComment />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
            </VStack>
        </Grid>
    </BaseContainer>
}

export default PlaceDetail