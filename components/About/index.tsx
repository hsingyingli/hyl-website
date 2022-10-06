import React, { useRef, useState } from "react";
import { abouts } from '../../utils/about'
import { AboutInfo } from '../../utils/types/about'

const AboutCard: React.FC<AboutInfo> = ({ title, infoList }) => {
  return (
    <>
      <h1>{title}</h1>
      <div>
        <ul>
          {infoList.map((info, idx) => {
            return <li key={idx}>{info}</li>
          })}
        </ul>
      </div>
    </>
  )
}

const About = () => {
  return (
    <section className='min-h-screen'>

      {abouts.map((about, idx) => {
        return (
          <div key={idx} className='border-2 rounded-lg border-gray-400 p-3 my-2'>
            <AboutCard title={about.title} infoList={about.infoList} />
          </div>
        )
      })}

    </section>
  )
}

export default About
