import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { HeaderLayout } from '@/components/templates/HeaderLayout'
import theme from '@/utils/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <HeaderLayout />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
