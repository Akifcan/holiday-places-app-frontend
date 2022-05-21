import { FC } from 'react'
import { Avatar, HStack, Text, VStack, Box } from '@chakra-ui/react'

const CommentCard: FC = () => {
    return <VStack bg='white' p={5} borderRadius='md' alignItems={'flex-start'} shadow='lg'>
        <HStack>
            <Avatar />
            <Box>
                <Text fontWeight={'bold'}>Akifcan Kara</Text>
                <Text as='time'>5 Gün Önce - 5 Yıldız Verdi</Text>
            </Box>
        </HStack>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, illum, odio illo veniam corporis vitae dolorum asperiores adipisci quia iste unde ratione, excepturi soluta dignissimos. Iste, nam velit. Recusandae, est.</Text>
    </VStack>
}

export default CommentCard