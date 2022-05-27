import { FC } from 'react'
import { Avatar, HStack, Text, VStack, Box } from '@chakra-ui/react'
import { CommentQueryProps } from '@/apollo/quaries/comments'
import TimeAgo from 'timeago-react'
import * as timeago from 'timeago.js'
import tr from 'timeago.js/lib/lang/tr'
timeago.register('tr', tr)
interface CommentCardProps {
    comment: CommentQueryProps
}

const CommentCard: FC<CommentCardProps> = ({ comment }) => {
    return <VStack bg='white' p={5} borderRadius='md' alignItems={'flex-start'} shadow='lg' textTransform={'capitalize'}>
        <HStack>
            <Avatar src={comment.profilePhoto} />
            <Box>
                <Text fontWeight={'bold'}>{comment.username}</Text>
                <Text as='time'><Text as='span'><TimeAgo
                    datetime={comment.createdAt}
                    locale='tr'
                /></Text> - {comment.rate} Yıldız Verdi</Text>
            </Box>
        </HStack>
        <Text>{comment.body}</Text>
    </VStack>
}

export default CommentCard