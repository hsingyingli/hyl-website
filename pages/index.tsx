import path from 'path'
import fs from 'fs'
import type { GetStaticProps, NextPage } from 'next'
import { Fragment } from 'react'
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
