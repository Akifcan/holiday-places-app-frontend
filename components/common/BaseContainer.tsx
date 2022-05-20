import { Container } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'
import Header, { BreadcrumbItemProps } from './Header'

interface BaseContainerProps {
    children: ReactNode,
    breadcrumbItems?: BreadcrumbItemProps[]
}

const BaseContainer: FC<BaseContainerProps> = ({ children, breadcrumbItems }) => {
    return <>
        <Header breadcrumbItems={breadcrumbItems} />
        <Container marginBlock={2} maxW={'container.xl'} as='main'>
            {children}
        </Container>
    </>
}

export default BaseContainer