import { FC } from 'react'
import { Icon, InputGroup, InputRightElement, Input, IconButton, Tooltip } from '@chakra-ui/react'
import { GrSend } from 'react-icons/gr'

const CreateComment: FC = () => {
    return <InputGroup bg='white' borderRadius={'md'}>
        <Input shadow='lg' placeholder='Düşünceleriniz...' />
        <InputRightElement>
            <Tooltip label='Yorumunuzu Paylaşın'>
                <IconButton aria-label='Yorumunuzu Paylaışın' onClick={() => true} icon={<Icon as={GrSend} />} />
            </Tooltip>
        </InputRightElement>
    </InputGroup>
}

export default CreateComment