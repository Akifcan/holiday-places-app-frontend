import { FC } from 'react'
import {
    HStack, Button, Heading, ButtonGroup, Icon, Container, Box, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { AiOutlineHome } from 'react-icons/ai'
import { useRouter } from 'next/router'

export interface BreadcrumbItemProps {
    label: string,
    href: string
}

interface HeaderProps {
    breadcrumbItems?: BreadcrumbItemProps[]
}

const Header: FC<HeaderProps> = ({ breadcrumbItems }) => {

    const router = useRouter()

    return <Box as='header' bg='primary'>
        <Container p={5} maxW={'container.xl'}>
            <HStack color='white' justifyContent={'space-between'} flexDirection={['column', 'column', 'row']} gridGap={5}>
                <Heading as='a' cursor={'pointer'} onClick={() => router.push('/')}>HolidayPlaces</Heading>
                <ButtonGroup>
                    <Button onClick={() => router.push('/')} colorScheme={'blue'} leftIcon={<Icon as={AiOutlineHome} />}>Ana Sayfa</Button>
                    <Button onClick={() => router.push('/create')} colorScheme={'blue'} leftIcon={<Icon as={IoIosAddCircleOutline} />}> Yeni Ekle</Button>
                </ButtonGroup>
            </HStack>
            {breadcrumbItems && (
                <Breadcrumb marginTop={2} color='white'>
                    {breadcrumbItems.map((item, index) => {
                        return <BreadcrumbItem key={index} isCurrentPage={index === breadcrumbItems.length - 1}>
                            <BreadcrumbLink textTransform={'capitalize'} href={item.href} fontWeight={index === breadcrumbItems.length - 1 ? 'bold' : 'normal'}>{item.label}</BreadcrumbLink>
                        </BreadcrumbItem>

                    })}
                </Breadcrumb>
            )}
        </Container>
    </Box>
}

export default Header