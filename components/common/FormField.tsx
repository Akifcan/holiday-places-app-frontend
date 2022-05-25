import { FC, ReactNode, useCallback } from 'react'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react'

interface FormFieldProps {
    isRequired: boolean
    errorMessage?: string
    children: ReactNode
    label: string
}

const FormField: FC<FormFieldProps> = ({ children, errorMessage, isRequired, label }) => {


    const form = useCallback((node: HTMLDivElement) => {
        if (!node) return
        const input = node.querySelector('input') || node.querySelector('textarea') || node.querySelector('select')
        if (!input) return
        if (errorMessage) {
            input.setAttribute('is-valid', 'no')
        } else {
            if (isRequired && input.value.length === 0) {
                input.setAttribute('is-valid', 'no')
            } else {
                input.setAttribute('is-valid', 'yes')
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errorMessage, isRequired, children])

    return <FormControl ref={form} isRequired={isRequired} isInvalid={errorMessage ? true : false}>
        <FormLabel htmlFor='name'>{label}</FormLabel>
        {children}
        {errorMessage && (
            <FormErrorMessage marginBlockEnd={3}>{errorMessage}</FormErrorMessage>
        )}
    </FormControl>
}

export default FormField