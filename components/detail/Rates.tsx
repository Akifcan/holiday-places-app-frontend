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

const Rates: FC = () => {
    return <VStack bg='white' p={5} borderRadius='md' shadow={'lg'} alignItems='stretch'>
        <RatingInfo color='primary' label='5' percentage={60} />
        <RatingInfo color='yellow.400' label='2' percentage={20} />
        <RatingInfo color='red.500' label='1' percentage={20} />
    </VStack>
}

export default Rates