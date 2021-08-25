import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    900: "#8615DF",
    800: "#38085C",
    700: "#190429",
    500: "#ffffff",
    400: "#F6F6F7",
    300: "#666665"
  },
}

export const heightElements = '60px'
export const radiusElements = '8px'

export const theme = extendTheme({colors})

export function ChakraProviderCustom(props){
    return (
        <ChakraProvider theme={theme}>
            {props.children}
        </ChakraProvider>
    )
}