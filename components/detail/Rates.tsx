import { CommentPercentageProps } from '@/apollo/quaries/comments'
import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { AiFillStar } from 'react-icons/ai'


const RatingInfo: FC<{ label: string, percentage: number, color: string }> = ({ label, percentage, color }) => {
    return <HStack>
        <Icon as={AiFillStar} color={color} fontSize={'2.5rem'} />
        <Text fontSize={'2rem'} fontWeight='bold'>{label}</Text>
        <Box width={`${percentage}%`} bg={color} height={'5px'} borderRadius='full' />
    </HStack>

}

interface RatesProps {
    percetanges: CommentPercentageProps[]
}

const Rates: FC<RatesProps> = ({ percetanges }) => {
    return <VStack bg='white' p={5} borderRadius='md' shadow={'lg'} alignItems='stretch'>
        {percetanges.map((item, index) => {
            return <RatingInfo key={index} color={index < 2 ? 'primary' : 'yellow.500'} label={item.rate.toString()} percentage={item.per} />
        })}
    </VStack>
}

export default Rates