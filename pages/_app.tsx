import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeProvider from '../providers/ThemeProvider'
import MainLayout from '../components/Layout/main'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider>
      <MainLayout path={router.asPath}>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}

export default MyApp
