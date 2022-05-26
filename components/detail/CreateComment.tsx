import { FC, useRef, useState, useCallback, useEffect } from 'react'
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
    Textarea,
    useToast
} from '@chakra-ui/react'
import { GrSend } from 'react-icons/gr'
import { AiFillStar } from 'react-icons/ai'
import FormField from '../common/FormField'
import Validation, { FormState } from '@/helpers/validation'
import { useMutation } from '@apollo/client'
import { CommentQueryProps, CREATE_COMMENT_MUTATION } from '@/apollo/quaries/comments'

interface CreateCommentProps {
    placeId: string,
    onCommentCreated: (comment: CommentQueryProps) => void
}

const CreateComment: FC<CreateCommentProps> = ({ placeId, onCommentCreated }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const givenStar = useRef(3)

    const [validation, setValidation] = useState<Validation>()
    const [username, setUsername] = useState<FormState<string>>({ value: '', errorMessage: undefined })
    const [comment, setComment] = useState<FormState<string>>({ value: '', errorMessage: undefined })
    const [isDisabled, setDisabled] = useState(true)

    const [mutateCreateComment, { data, loading }] = useMutation(CREATE_COMMENT_MUTATION);

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

    const onSubmit = () => {
        mutateCreateComment({
            variables: {
                placeId,
                username: username.value,
                rate: givenStar.current,
                body: comment.value
            }
        })
    }

    useEffect(() => {
        if (!data) return

        toast({
            title: 'Yorumunuz Oluşturldu',
            description: "Düşünceleriniz için teşekkür ederiz.",
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
        onCommentCreated(data.createComment)
        onClose()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    const form = useCallback((node: HTMLDivElement) => {
        if (!node) return
        setValidation(new Validation(node))
        node.addEventListener('valid', () => {
            setDisabled(false)
        })
        node.addEventListener('notValid', () => {
            setDisabled(true)
        })
    }, [])



    return <>
        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Yorumunuzu Paylaşın</ModalHeader>
                <ModalCloseButton />
                <ModalBody ref={form}>
                    {validation && (
                        <>

                            <HStack>
                                <FormField isRequired={true} errorMessage={username.errorMessage} label='İsminiz'>
                                    <Input value={username.value} onChange={(e) => {
                                        setUsername({
                                            value: e.target.value,
                                            errorMessage: validation.setValue(e.target.value).notEmpty().minLength(5).validate()
                                        })
                                    }} bg='#eee' id='name' type='text' />
                                </FormField>
                                <HStack flex={1} alignSelf='center'>
                                    <Icon data-star={1} onMouseOver={(e) => handleStar(e.currentTarget)} as={AiFillStar} color={"primary"} fontSize={'2.5rem'} />
                                    <Icon data-star={2} onMouseOver={(e) => handleStar(e.currentTarget)} as={AiFillStar} color={"primary"} fontSize={'2.5rem'} />
                                    <Icon data-star={3} onMouseOver={(e) => handleStar(e.currentTarget)} as={AiFillStar} color={"primary"} fontSize={'2.5rem'} />
                                    <Icon data-star={4} onMouseOver={(e) => handleStar(e.currentTarget)} as={AiFillStar} color={"blue.300"} fontSize={'2.5rem'} />
                                    <Icon data-star={5} onMouseOver={(e) => handleStar(e.currentTarget)} as={AiFillStar} color={"blue.300"} fontSize={'2.5rem'} />
                                </HStack>
                            </HStack>
                            <FormField isRequired={true} label={'Yorumunuz'} errorMessage={comment.errorMessage}>
                                <Textarea
                                    onChange={(e) => {
                                        setComment({
                                            value: e.target.value,
                                            errorMessage: validation.setValue(e.target.value).notEmpty().minLength(15).maxLength(200).validate()
                                        })
                                    }}
                                    value={comment.value}
                                    id='comment' bg='#eee' placeholder='Düşünceleriniz...' />
                            </FormField>
                        </>
                    )}

                </ModalBody>

                <ModalFooter>
                    <Button variant={'ghost'} mr={3} onClick={onClose}>
                        Geri Dön
                    </Button>
                    <Button isLoading={loading} loadingText='Lütfen Bekleyin' isDisabled={isDisabled} onClick={onSubmit} colorScheme={'blue'} bg='primary'>Paylaş</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        <InputGroup bg='white' borderRadius={'md'}>
            <Input value={comment.value}
                onChange={(e) => {
                    setComment({
                        value: e.target.value,
                        errorMessage: new Validation().setValue(e.target.value).notEmpty().minLength(15).maxLength(200).validate()
                    })
                }}
                shadow='lg' placeholder='Düşünceleriniz...' />
            <InputRightElement>
                <Tooltip label='Yorumunuzu Paylaşın'>
                    <IconButton aria-label='Yorumunuzu Paylaışın' onClick={onOpen} icon={<Icon as={GrSend} />} />
                </Tooltip>
            </InputRightElement>
        </InputGroup>
    </>
}

export default CreateComment