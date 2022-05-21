import { FC } from 'react'
import {
    Icon, InputGroup, InputRightElement, Input, IconButton, Tooltip,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    HStack,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Textarea
} from '@chakra-ui/react'
import { GrSend } from 'react-icons/gr'
import { AiFillStar } from 'react-icons/ai'

const CreateComment: FC = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return <>
        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Yorumunuzu Paylaşın</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <HStack>
                        <FormControl isRequired={true}>
                            <FormLabel htmlFor='name'>Adınız</FormLabel>
                            <Input bg='#eee' id='name' type='text' />
                        </FormControl>
                        <HStack flex={1} alignSelf='flex-end' pb={2}>
                            <Icon as={AiFillStar} color={"primary"} fontSize={'2.5rem'} />
                            <Icon as={AiFillStar} color={"primary"} fontSize={'2.5rem'} />
                            <Icon as={AiFillStar} color={"primary"} fontSize={'2.5rem'} />
                            <Icon as={AiFillStar} color={"primary"} fontSize={'2.5rem'} />
                            <Icon as={AiFillStar} color={"primary"} fontSize={'2.5rem'} />
                        </HStack>
                    </HStack>
                    <FormControl marginTop={5} isInvalid={true} isRequired={true}>
                        <FormLabel htmlFor='comment'>Yorumunuz</FormLabel>
                        <Textarea id='comment' bg='#eee' placeholder='Düşünceleriniz...' />
                        <FormErrorMessage>Lütfen bu alanı boş bırakmayın</FormErrorMessage>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button variant={'ghost'} mr={3} onClick={onClose}>
                        Geri Dön
                    </Button>
                    <Button colorScheme={'blue'} bg='primary'>Paylaş</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        <InputGroup bg='white' borderRadius={'md'}>
            <Input shadow='lg' placeholder='Düşünceleriniz...' />
            <InputRightElement>
                <Tooltip label='Yorumunuzu Paylaşın'>
                    <IconButton aria-label='Yorumunuzu Paylaışın' onClick={onOpen} icon={<Icon as={GrSend} />} />
                </Tooltip>
            </InputRightElement>
        </InputGroup>
    </>
}

export default CreateComment