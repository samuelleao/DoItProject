import { ChakraProviderCustom } from '../components/style/Global';

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProviderCustom>
      <Component {...pageProps}/>
    </ChakraProviderCustom>
  )
}

