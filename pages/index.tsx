import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import useTheme from '../hooks/useTheme'

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
    </div>
  )
}

export default Home
