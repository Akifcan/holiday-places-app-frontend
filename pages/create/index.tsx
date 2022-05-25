import { FC, useState, useCallback } from 'react'
import { Button, Input, Select, Text, VStack } from '@chakra-ui/react'
import BaseContainer from '@/components/common/BaseContainer'
import Validation, { FormState } from '@/helpers/validation'
import FormField from '@/components/common/FormField'
import cities from '@/config/constants/cities'

const Create: FC = () => {

    const [validation, setValidation] = useState<Validation>()
    const [isDisabled, setDisabled] = useState(true)

    const [name, setName] = useState<FormState<string>>({ value: '', errorMessage: undefined })
    const [logo, setLogo] = useState<FormState<string>>({ value: '', errorMessage: undefined })
    const [province, setProvince] = useState<FormState<string>>({ value: '', errorMessage: undefined })
    const [category, setCategory] = useState<FormState<string>>({ value: '', errorMessage: undefined })
    const [photoSrc, setPhotoSrc] = useState<FormState<string>>({ value: '', errorMessage: undefined })

    const [photos, setPhotos] = useState<string[]>([])


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
                    <Button bg='primary' colorScheme={'blue'} isDisabled={isDisabled}>Gönder</Button>
                </>
            )}
        </VStack>
    </BaseContainer>
}

export default Create