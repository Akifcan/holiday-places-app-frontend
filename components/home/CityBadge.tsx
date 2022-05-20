import { FC } from 'react'
import { HStack, Text } from '@chakra-ui/react'
import Link from 'next/link'

const CityBadge: FC = () => {
    return <Link href={'/city/istanbul'} passHref={true}>
        <HStack color='white' borderRadius={'md'} bg='primary' width={'100%'} overflow='hidden' shadow='lg' cursor={'pointer'}>
            <Text borderLeftRadius={'md'} p={2} bg='blue.500'>35</Text>
            <Text whiteSpace={'nowrap'} textOverflow={'ellipsis'} overflow='hidden' textTransform={'capitalize'}>Kahramanmaraş</Text>
        </HStack>
    </Link>
}

export default CityBadge