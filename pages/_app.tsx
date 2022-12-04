import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeProvider from '../providers/ThemeProvider'
import MainLayout from '../components/Layout/main'
import ScrollObserver from '../providers/ScrollObserver'
import NoteSelector from '../providers/NotesSelector'
import NoteLayout from '../components/Layout/NoteLayout'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider>
      <ScrollObserver>
        <MainLayout path={router.asPath}>
          {
            router.asPath.includes("/notes") ?
              <NoteSelector>
                <NoteLayout>
                  <Component {...pageProps} />
                </NoteLayout>
              </NoteSelector>
              :
              <Component {...pageProps} />
          }
        </MainLayout>
      </ScrollObserver>
    </ThemeProvider>
  )
}

export default MyApp
