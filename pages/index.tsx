import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Hero from '../components/Hero'
import useTheme from '../hooks/useTheme'

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <div className='h-screen'> Hello</div>
    </div>
  )
}

export default Home
