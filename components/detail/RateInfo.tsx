import { FC } from 'react'
import { HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'
import { AveragePointProps } from '@/apollo/quaries/comments'

interface RateInfoProps {
    point: AveragePointProps
}

const RateInfo: FC<RateInfoProps> = ({ point }) => {
    return <VStack marginTop={5} bg='white' shadow={'lg'} borderRadius='md' p={5}>
        <Icon as={AiFillStar} color='primary' fontSize={'2.5rem'} />
        <HStack>
            <Text>{point.avg.toFixed(1)} Puan</Text> <Text>/</Text> <Text>{point.count} Yorum</Text>
        </HStack>
    </VStack>
}


export default RateInfo