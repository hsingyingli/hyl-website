import React, { useRef, useState } from "react";
import AboutCard from "./card";
import { abouts } from '../../utils/about'


const About = () => {
  return (
    <section className='min-h-screen'>
      {abouts.map((about, idx) => {
        return (
          <AboutCard key={idx} title={about.title} infoList={about.infoList} />
        )
      })}

    </section>
  )
}

export default About
