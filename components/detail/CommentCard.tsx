import { FC } from 'react'
import { Avatar, HStack, Text, VStack, Box } from '@chakra-ui/react'
import { CommentQueryProps } from '@/apollo/quaries/comments'

interface CommentCardProps {
    comment: CommentQueryProps
}

const CommentCard: FC<CommentCardProps> = ({ comment }) => {
    console.log(comment)
    return <VStack bg='white' p={5} borderRadius='md' alignItems={'flex-start'} shadow='lg'>
        <HStack>
            <Avatar src={comment.profilePhoto} />
            <Box>
                <Text fontWeight={'bold'}>{comment.username}</Text>
                <Text as='time'>5 Gün Önce - {comment.rate} Yıldız Verdi</Text>
            </Box>
        </HStack>
        <Text>{comment.body}</Text>
    </VStack>
}

export default CommentCard