import { extendTheme } from '@chakra-ui/react'

const colors = {
    primary: '#006994',
    body: '#dedede',
    dark: '#333',
    muted: '#999'
}

const fonts = {
    heading: 'Inter, sans-serif',
    body: 'Roboto, sans-serif'
}

const styles = {
    global: () => ({
        body: {
            bg: "body",
        },
    }),
}



export default extendTheme({ colors, fonts, styles })