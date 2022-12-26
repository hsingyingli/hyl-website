import path from 'path'
import fs from 'fs'
import type { GetStaticProps, NextPage } from 'next'
import { Fragment } from 'react'
import Link from 'next/link'
import About from '../components/About'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import { ItemList } from '../utils/types/skill'

interface Props {
  skills: ItemList
}

const Home: NextPage<Props> = ({ skills }) => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Skills skills={skills} />
      <div className='w-full flex justify-around'>
        <Link href='/notes' passHref>
          <a className='w-24 text-center bg-teal-500 py-2 px-4 rounded-lg hover:bg-teal-300 hover:text-gray-800 duration-500'>Notes </a>
        </Link>
        <Link href='/projects' passHref>
          <a className='w-24 text-center py-2 px-4 border-teal-500 border-2 rounded-lg hover:border-teal-300 duration-500'>Projects</a>
        </Link>
      </div>
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const rawData = fs.readFileSync(path.join('public', 'skills.json'), 'utf8')
  const data = JSON.parse(rawData)
  return {
    props: {
      skills: data.skills
    }
  }
}

export default Home
