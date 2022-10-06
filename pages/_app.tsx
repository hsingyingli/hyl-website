import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeProvider from '../providers/ThemeProvider'
import MainLayout from '../components/Layout/main'
import ScrollObserver from '../providers/ScrollObserver'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider>
      <ScrollObserver>
        <MainLayout path={router.asPath}>
          <Component {...pageProps} />
        </MainLayout>
      </ScrollObserver>
    </ThemeProvider>
  )
}

export default MyApp
