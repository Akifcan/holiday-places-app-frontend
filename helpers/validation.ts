export interface FormState<T> {
    value: T,
    errorMessage?: string
}

class Validation {

    validations: string[] = []
    value = ''
    form?: HTMLDivElement
    listening: boolean = false

    constructor(form?: HTMLDivElement) {
        this.form = form
    }

    listenForm() {

        const valid = new Event('valid')
        const notValid = new Event('notValid')

        setTimeout(() => {
            const notValidElements = this.form!.querySelectorAll('[is-valid="no"]')

            if (notValidElements.length === 0) {
                this.form!.dispatchEvent(valid)
            } else {
                this.form!.dispatchEvent(notValid)
            }
        }, 0)

    }


    setValue(value: string) {
        this.validations = []
        this.value = value
        return this
    }

    notEmpty() {
        this.validations.push('notEmpty')
        return this
    }

    email() {
        this.validations.push('email')
        return this
    }

    maxLength(max: number) {
        this.validations.push(`maxLength|${max}`)
        return this
    }

    minLength(min: number) {
        this.validations.push(`minLength|${min}`)
        return this
    }

    validate(): string | undefined {
        let message: string | undefined

        for (let i = 0; i < this.validations.length; i++) {
            const current = this.validations[i]
            if (current === 'notEmpty') {
                if (this.value.trim().length === 0) {
                    message = 'Lütfen bu alanı doldurun'
                }
                continue
            }
            if (current === 'email') {
                const emailRegex = /(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
                if (!emailRegex.test(this.value)) {
                    message = `E-Posta formatınızı yanlış girdiniz.`
                }
                continue
            }
            if (current.includes('maxLength')) {
                const max = +current.split('|')[1]
                if (this.value.trim().length > max) {
                    message = `Lütfen en fazla ${max} karakter girin`
                }
                continue
            }
            if (current.includes('minLength')) {
                const min = +current.split('|')[1]
                if (this.value.trim().length < min) {
                    message = `Lütfen en az ${min} karakter girin`
                }
                continue
            }

        }

        if (this.form) {
            this.listenForm()
        }

        return message
    }

}

export default Validation