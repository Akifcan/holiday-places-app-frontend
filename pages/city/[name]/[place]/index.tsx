import { FC, useEffect, useState } from 'react'
import BaseContainer from '@/components/common/BaseContainer'
import { useRouter } from 'next/router'
import { Grid, VStack, Box, Spinner } from '@chakra-ui/react'
import PlaceCard from '@/components/city/PlaceCard'
import CommentCard from '@/components/detail/CommentCard'
import RateInfo from '@/components/detail/RateInfo'
import Rates from '@/components/detail/Rates'
import CreateComment from '@/components/detail/CreateComment'
import { useLazyQuery } from '@apollo/client'
import { PlacesQueryProps, PLACE_QUERY } from '@/apollo/quaries/places'
import { CommentQueryProps } from '@/apollo/quaries/comments'

const PlaceDetail: FC = () => {

    const router = useRouter()
    const [isLoading, setLoading] = useState(true)
    const [getPlaces, { data: placesData }] = useLazyQuery<{ place: PlacesQueryProps }>(PLACE_QUERY)

    const [comments, setComments] = useState<CommentQueryProps[]>([])

    const onCommentCreated = (comment: CommentQueryProps) => {
        setComments(prev => [comment, ...prev])
    }

    useEffect(() => {
        if (!placesData) return
        setLoading(false)
    }, [placesData])

    useEffect(() => {
        if (!router.query.place) return
        getPlaces({
            variables: {
                id: router.query.place as string
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router])

    return <BaseContainer breadcrumbItems={[
        { label: 'Ana Sayfa', href: '/' },
        { label: router.query.name as string || '', href: `/city/${router.query.name as string}` },
        { label: placesData?.place.name || 'Lütfen Bekleyin', href: `/city/${router.query.place as string}` },
    ]}>
        <Grid gridTemplateColumns={'300px 1fr'} gridGap={5}>
            {isLoading && <Spinner gridColumn={'2'} size='xl' color='primary' marginTop={5} />}
            {!isLoading && (
                <>
                    <Box alignSelf={'flex-start'} position='sticky' top={2}>
                        <PlaceCard place={placesData!.place} />
                        <RateInfo />
                    </Box>
                    <VStack alignItems={'stretch'}>
                        <Rates />
                        <CreateComment onCommentCreated={onCommentCreated} placeId={placesData!.place._id} />
                        {comments.map((comment) => {
                            return <CommentCard comment={comment} key={comment._id} />
                        })}
                    </VStack>
                </>
            )}
        </Grid>
    </BaseContainer>
}

export default PlaceDetail