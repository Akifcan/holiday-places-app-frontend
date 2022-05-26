import { FC, useState, useCallback, useEffect } from 'react'
import { Button, Grid, Icon, IconButton, Input, InputGroup, InputRightElement, Select, Text, Tooltip, VStack } from '@chakra-ui/react'
import BaseContainer from '@/components/common/BaseContainer'
import Validation, { FormState } from '@/helpers/validation'
import FormField from '@/components/common/FormField'
import cities from '@/config/constants/cities'
import { MdAdd } from 'react-icons/md'
import PhotoBox from '@/components/create/PhotoBox'
import { useMutation } from '@apollo/client';
import { CREATE_PLACE_MUTATION } from '@/apollo/quaries/places'


const Create: FC = () => {

    const [validation, setValidation] = useState<Validation>()
    const [isDisabled, setDisabled] = useState(true)
    const [canSubmit, setCanSubmit] = useState(true)

    const [name, setName] = useState<FormState<string>>({ value: '', errorMessage: undefined })
    const [logo, setLogo] = useState<FormState<string>>({ value: '', errorMessage: undefined })
    const [province, setProvince] = useState<FormState<string>>({ value: '', errorMessage: undefined })
    const [category, setCategory] = useState<FormState<string>>({ value: '', errorMessage: undefined })
    const [photoSrc, setPhotoSrc] = useState<FormState<string>>({ value: '', errorMessage: undefined })

    const [mutateCreatePlace, { data, loading, error }] = useMutation(CREATE_PLACE_MUTATION)

    useEffect(() => {
        console.log(loading)
    }, [loading])

    useEffect(() => {
        if (!data) return
        console.log(data)
    }, [data])

    const [photos, setPhotos] = useState<string[]>([])

    const addPhoto = () => {
        setPhotos(prev => [...prev, photoSrc.value])
        setPhotoSrc({ value: '', errorMessage: '' })
    }

    const removePhoto = (src: string) => {
        setPhotos(prev => prev.filter(url => url !== src))
    }

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

    useEffect(() => {
        if (isDisabled) {
            return setCanSubmit(true)
        }
        if (photos.length > 0) {
            setCanSubmit(false)
        } else {
            setCanSubmit(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDisabled, canSubmit, photos])

    const onSubmit = () => {
        mutateCreatePlace({
            variables: {
                name: name.value,
                logo: logo.value,
                photos,
                province: province.value,
                category: category.value
            }
        })
    }

    return <BaseContainer breadcrumbItems={[{ label: 'Ana Sayfa', href: '/' },
    { label: 'Yeni Mekan Ekle', href: '/create' }]}>
        <VStack ref={form} alignItems={'stretch'}>
            {validation && (
                <>
                    <FormField isRequired={true} errorMessage={name.errorMessage} label='Mekan İsmi'>
                        <Input value={name.value} onChange={(e) => {
                            setName({
                                value: e.target.value,
                                errorMessage: validation.setValue(e.target.value).notEmpty().minLength(5).validate()
                            })
                        }} bg='#eee' id='name' type='text' />
                    </FormField>
                    <FormField isRequired={true} errorMessage={logo.errorMessage} label='Logo URL Adresi'>
                        <Input value={logo.value} onChange={(e) => {
                            setLogo({
                                value: e.target.value,
                                errorMessage: validation.setValue(e.target.value).notEmpty().minLength(5).validate()
                            })
                        }} bg='#eee' id='logo' type='text' />
                    </FormField>
                    <FormField isRequired={true} errorMessage={province.errorMessage} label='Şehir'>
                        <Select bg='#eee' value={province.value} onChange={(e) => {
                            setProvince({
                                value: e.target.value,
                                errorMessage: validation.setValue(e.target.value).notEmpty().validate()
                            })
                        }}>
                            <option value=''>Şehir Seçin</option>
                            {cities.map((city) => {
                                return <option key={city} value={city.toLowerCase()}>{city}</option>
                            })}
                        </Select>
                    </FormField>
                    <FormField isRequired={true} errorMessage={category.errorMessage} label='Kategoriniz'>
                        <Select bg='#eee' value={category.value} onChange={(e) => {
                            setCategory({
                                value: e.target.value,
                                errorMessage: validation.setValue(e.target.value).notEmpty().validate()
                            })
                        }}>
                            <option value={''}>Kategori Seçin</option>
                            <option value={'cafe'}>Kafe</option>
                            <option value={'restaurant'}>Restoran</option>
                            <option value={'library'}>Kütüphane</option>
                            <option value={'nightClub'}>Gece Kulübü</option>
                        </Select>
                    </FormField>
                    <FormField isRequired={false} errorMessage={photoSrc.errorMessage} label='Fotoğraf URL Adresi'>
                        <InputGroup>
                            <InputRightElement>
                                <Tooltip label='Eklemek için tıklayın'>
                                    <IconButton onClick={addPhoto} isDisabled={photoSrc.value.length === 0} aria-label='Resim Ekleyin' icon={<Icon as={MdAdd} />} />
                                </Tooltip>
                            </InputRightElement>
                            <Input value={photoSrc.value} onChange={(e) => {
                                setPhotoSrc({
                                    value: e.target.value,
                                    errorMessage: validation.setValue(e.target.value).notEmpty().validate()
                                })
                            }} bg='#eee' id='name' type='text' />
                        </InputGroup>
                    </FormField>
                    <Grid gridTemplateColumns={['1fr 1fr', '1fr 1fr 1fr']} gridGap={5}>
                        {photos.map(photo => {
                            return <PhotoBox onRemove={() => removePhoto(photo)} src={photo} key={photo} />
                        })}
                    </Grid>
                    <Button isLoading={loading} loadingText='Lütfen Bekleyin' onClick={onSubmit} bg='primary' colorScheme={'blue'} isDisabled={canSubmit}>Gönder</Button>
                </>
            )}
        </VStack>
    </BaseContainer>
}

export default Create