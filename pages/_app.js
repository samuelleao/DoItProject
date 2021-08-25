import { ChakraProviderCustom } from '../components/style/Global';
import dynamic from 'next/dynamic'
const Tabs = dynamic(import('../components/Input/index.js').then(mod => mod.Tabs), { ssr: false })
export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProviderCustom>
      <Component {...pageProps}/>
    </ChakraProviderCustom>
  )
}


