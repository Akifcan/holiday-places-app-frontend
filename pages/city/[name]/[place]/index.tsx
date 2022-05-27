import { FC, useEffect, useState, lazy } from 'react'
import BaseContainer from '@/components/common/BaseContainer'
import { useRouter } from 'next/router'
import { Grid, VStack, Box, Spinner, Button } from '@chakra-ui/react'
import PlaceCard from '@/components/city/PlaceCard'
import CommentCard from '@/components/detail/CommentCard'
import RateInfo from '@/components/detail/RateInfo'
import Rates from '@/components/detail/Rates'
import CreateComment from '@/components/detail/CreateComment'
import { useLazyQuery } from '@apollo/client'
import { PlacesQueryProps, PLACE_QUERY } from '@/apollo/quaries/places'
import { AveragePointProps, AVERAGE_POINT_QUERY, CommentPercentageProps, CommentQueryProps, COMMENTS_PERCENTAGE_QUERY, LIST_COMMENTS_QUERY } from '@/apollo/quaries/comments'
import PaginatedQueryProps from '@/apollo/interface/paginatedQuery.interface'

const PlaceDetail: FC = () => {

    const router = useRouter()
    const [isLoading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState<number>()

    const [getPlaces, { data: placesData }] = useLazyQuery<{ place: PlacesQueryProps }>(PLACE_QUERY)
    const [getComment, { data: commentsData, loading: commentsLoading }] = useLazyQuery<{ listComments: PaginatedQueryProps<CommentQueryProps[]> }>(LIST_COMMENTS_QUERY)
    const [getAveragePoint, { data: averagePointData }] = useLazyQuery<{ averagePoint: AveragePointProps }>(AVERAGE_POINT_QUERY)
    const [getPercentage, { data: percentageData }] = useLazyQuery<{ commentPercentage: CommentPercentageProps[] }>(COMMENTS_PERCENTAGE_QUERY)

    const [comments, setComments] = useState<CommentQueryProps[]>([])

    const onCommentCreated = (comment: CommentQueryProps) => {
        setComments(prev => [comment, ...prev])
    }

    useEffect(() => {
        if (!commentsData) return
        setTotalPage(commentsData.listComments.totalPage)
        setComments(prev => [...prev, ...commentsData.listComments.data])
    }, [commentsData, commentsLoading])

    useEffect(() => {
        if (currentPage > 1) {
            window?.scrollTo(0, document.body.scrollHeight)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [comments])

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
        getAveragePoint({
            variables: {
                placeId: router.query.place as string
            }
        })
        getPercentage({
            variables: {
                placeId: router.query.place as string
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router])

    useEffect(() => {
        getComment({
            variables: {
                placeId: router.query.place as string,
                page: currentPage
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router, currentPage])

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
                        {averagePointData && (
                            <RateInfo point={averagePointData.averagePoint} />
                        )}
                    </Box>
                    <VStack alignItems={'stretch'}>
                        {percentageData && (
                            <Rates percetanges={[...percentageData.commentPercentage].sort((a, b) => (a.rate > b.rate) ? -1 : 1)} />
                        )}
                        <CreateComment onCommentCreated={onCommentCreated} placeId={placesData!.place._id} />
                        {comments.map((comment) => {
                            return <CommentCard comment={comment} key={comment._id} />
                        })}
                        {commentsLoading && <Spinner alignSelf={'center'} />}
                        {totalPage && currentPage < totalPage && (
                            <Button onClick={() => setCurrentPage(prev => prev += 1)} bg='primary' colorScheme={'blue'} marginBlock={2} width='100%'>Devam Et</Button>
                        )}
                    </VStack>
                </>
            )}
        </Grid>
    </BaseContainer>
}

export default PlaceDetail