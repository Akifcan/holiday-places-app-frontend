import { FC } from 'react'
import { Box, IconButton, Tooltip, Icon, Image } from '@chakra-ui/react'
import { BsFillTrashFill } from 'react-icons/bs'

interface PhotoBoxProps {
    src: string,
    onRemove: () => void
}

const PhotoBox: FC<PhotoBoxProps> = ({ src, onRemove }) => {
    return <Box position={'relative'} height={'200px'} bg='primary' borderRadius={'md'} shadow='lg' overflow={'hidden'}>
        <Tooltip label='Kaldırmak için tıklayın'>
            <IconButton position={'absolute'} top={5} right={5} aria-label='Kaldırmak için tıklayın' onClick={onRemove} icon={<Icon as={BsFillTrashFill} />} />
        </Tooltip>
        <Image alt='Önizleme' src={src} width='100%' height='100%' objectFit={'cover'} />
    </Box>
}

export default PhotoBox