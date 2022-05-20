import { FC } from 'react'
import { HStack, Text } from '@chakra-ui/react'
import Link from 'next/link'

interface CityBadgeProps {
    name: string,
    index: number
}

const CityBadge: FC<CityBadgeProps> = ({ name, index }) => {
    return <Link href={`/city/${name.toLowerCase()}`} passHref={true}>
        <HStack color='white' borderRadius={'md'} bg='primary' width={'100%'} overflow='hidden' shadow='lg' cursor={'pointer'}>
            <Text borderLeftRadius={'md'} p={2} bg='blue.500'>{index}</Text>
            <Text whiteSpace={'nowrap'} textOverflow={'ellipsis'} overflow='hidden' textTransform={'capitalize'}>{name}</Text>
        </HStack>
    </Link>
}

export default CityBadge