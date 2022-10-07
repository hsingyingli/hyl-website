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
      <div className='w-full flex justify-center'>
        <Link href='/posts' passHref>
          <a className='mx-auto bg-teal-500 p-2 rounded-lg hover:bg-teal-400 hover:text-gray-200 duration-500'>Posts </a></Link>
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
