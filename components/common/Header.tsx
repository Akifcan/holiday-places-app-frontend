import { FC } from 'react'
import { HStack, Button, Heading, ButtonGroup, Icon, Container, Box } from '@chakra-ui/react'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { AiOutlineHome } from 'react-icons/ai'
import { useRouter } from 'next/router'


const Header: FC = () => {

    const router = useRouter()

    return <Box as='header' bg='primary'><Container maxW={'container.xl'}>
        <HStack p={5} color='white' justifyContent={'space-between'} flexDirection={['column', 'column', 'row']} gridGap={5}>
            <Heading as='a' cursor={'pointer'} onClick={() => router.push('/')}>HolidayPlaces</Heading>
            <ButtonGroup>
                <Button onClick={() => router.push('/')} colorScheme={'blue'} leftIcon={<Icon as={AiOutlineHome} />}>Ana Sayfa</Button>
                <Button onClick={() => router.push('/create')} colorScheme={'blue'} leftIcon={<Icon as={IoIosAddCircleOutline} />}> Yeni Ekle</Button>
            </ButtonGroup>
        </HStack>
    </Container>
    </Box>
}

export default Header