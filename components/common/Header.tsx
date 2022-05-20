import { FC } from 'react'
import { HStack, Button, Heading, ButtonGroup, Icon } from '@chakra-ui/react'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { AiOutlineHome } from 'react-icons/ai'



const Header: FC = () => {
    return <HStack bg='primary' p={5} color='white' justifyContent={'space-between'}>
        <Heading>HolidayPlaces</Heading>
        <ButtonGroup>
            <Button colorScheme={'blue'} leftIcon={<Icon as={AiOutlineHome} />}>Ana Sayfa</Button>
            <Button colorScheme={'blue'} leftIcon={<Icon as={IoIosAddCircleOutline} />}> Yeni Ekle</Button>
        </ButtonGroup>
    </HStack >
}

export default Header