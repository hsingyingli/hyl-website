import React from 'react'
import Head from 'next/head'
import Footer from '../Footer'
import Navbar from '../Navbar'

interface Props {
  path: string
  children: React.ReactNode
}

const Main: React.FC<Props> = ({ path, children }) => {
  return (
    <div className='dark:bg-black dark:text-white text-black bg-amber-50 duration-500'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hsing Ying Li persional website" />
        <meta name="author" content="Hsing Ying Li" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>hyl-website</title>
      </Head>
      <Navbar path={path} />
      <div className='max-w-screen-md w-full mx-auto p-3 min-h-screen'>
        {children}
      </div>
      <Footer />
    </div>
  )
}


export default Main
