import { Container } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'
import Header from './Header'

interface BaseContainerProps {
    children: ReactNode
}

const BaseContainer: FC<BaseContainerProps> = ({ children }) => {
    return <>
        <Header />
        <Container marginBlock={2} maxW={'container.xl'} as='main'>
            {children}
        </Container>
    </>
}

export default BaseContainer