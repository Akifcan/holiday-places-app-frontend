import { FC, useRef } from 'react'
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
    Textarea
} from '@chakra-ui/react'
import { GrSend } from 'react-icons/gr'
import { AiFillStar } from 'react-icons/ai'
import FormField from '../common/FormField'

const CreateComment: FC = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const givenStar = useRef(3)

    const handleStar = (e: SVGElement) => {
        givenStar.current = parseInt(e.dataset!.star!)
        paintStar(e)
        unpaintStar(e)
    }

    const paintStar = (e: SVGElement) => {
        e.style.color = '#006994'

        if (e.previousElementSibling) {
            paintStar(e.previousElementSibling as SVGElement)
        }
    }

    const unpaintStar = (e: SVGElement) => {
        if (e.nextElementSibling) {
            const element = e.nextElementSibling as SVGElement
            element.style.color = '#63b3ed'
            unpaintStar(element)
        }
    }

    return <>
        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Yorumunuzu Paylaşın</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <HStack>
                        <FormField isRequired={true} errorMessage='error' label='İsminiz'>
                            <Input bg='#eee' id='name' type='text' />
                        </FormField>
                        <HStack flex={1} alignSelf='center'>
                            <Icon data-star={1} onMouseOver={(e) => handleStar(e.currentTarget)} as={AiFillStar} color={"primary"} fontSize={'2.5rem'} />
                            <Icon data-star={2} onMouseOver={(e) => handleStar(e.currentTarget)} as={AiFillStar} color={"primary"} fontSize={'2.5rem'} />
                            <Icon data-star={3} onMouseOver={(e) => handleStar(e.currentTarget)} as={AiFillStar} color={"primary"} fontSize={'2.5rem'} />
                            <Icon data-star={4} onMouseOver={(e) => handleStar(e.currentTarget)} as={AiFillStar} color={"blue.300"} fontSize={'2.5rem'} />
                            <Icon data-star={5} onMouseOver={(e) => handleStar(e.currentTarget)} as={AiFillStar} color={"blue.300"} fontSize={'2.5rem'} />
                        </HStack>
                    </HStack>
                    <FormField isRequired={true} label={'Yorumunuz'}>
                        <Textarea
                            id='comment' bg='#eee' placeholder='Düşünceleriniz...' />
                    </FormField>
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