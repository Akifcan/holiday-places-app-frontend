import { FC } from 'react'
import { Text } from '@chakra-ui/react'
import BaseContainer from '@/components/common/BaseContainer'

const Create: FC = () => {
    return <BaseContainer breadcrumbItems={[{ label: 'Ana Sayfa', href: '/' },
    { label: 'Yeni Mekan Ekle', href: '/create' }]}>
        <Text>add</Text>
    </BaseContainer>
}

export default Create