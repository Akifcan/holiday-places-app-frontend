import { FC, ReactNode } from 'react'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react'

interface FormFieldProps {
    isRequired: boolean
    errorMessage?: string
    children: ReactNode
    label: string
}

const FormField: FC<FormFieldProps> = ({ children, errorMessage, isRequired, label }) => {
    return <FormControl isRequired={isRequired} isInvalid={errorMessage ? true : false}>
        <FormLabel htmlFor='name'>{label}</FormLabel>
        {children}
        {errorMessage && (
            <FormErrorMessage marginBlockEnd={3}>{errorMessage}</FormErrorMessage>
        )}
    </FormControl>
}

export default FormField