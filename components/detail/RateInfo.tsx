import { FC } from 'react'
import { HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'

const RateInfo: FC = () => {
    return <VStack marginTop={5} bg='white' shadow={'lg'} borderRadius='md' p={5}>
        <Icon as={AiFillStar} color='primary' fontSize={'2.5rem'} />
        <HStack>
            <Text>3.5 Puan</Text> <Text>/</Text> <Text>50 Yorum</Text>
        </HStack>
    </VStack>
}


export default RateInfo