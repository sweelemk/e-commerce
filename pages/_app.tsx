import type { AppProps } from 'next/app'
import { AppLayout } from '../modules/components/app-layout'


export default function App({ Component, pageProps }: AppProps) {
  return <AppLayout>
    <Component {...pageProps} />
  </AppLayout>
}
