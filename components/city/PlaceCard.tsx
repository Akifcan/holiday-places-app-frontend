import { FC } from 'react'
import { Icon, Text, VStack, Box } from '@chakra-ui/react'
import { GoLocation } from 'react-icons/go'

const PlaceCard: FC = () => {
    return <VStack
        alignItems={'flex-start'}
        overflow='hidden'
        width={'200px'}
        bg='white'
        borderRadius={'md'}
        boxShadow='lg'>
        <Box width='100%' height={'200px'} bg='red'></Box>
        <Box p={2} marginTop='0 !important'>
            <Text fontWeight={'bold'} color='dark'>İsim</Text>
            <Text color='muted' fontWeight={'semibold'} as='small'>Restoran  - <Text as='span'> <Icon as={GoLocation} />  İzmir</Text> </Text>
        </Box>
    </VStack>
}

export default PlaceCard