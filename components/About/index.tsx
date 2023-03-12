import React from "react";
import AboutCard from "./card";
import { AboutInfos } from "../../utils/types/about";

interface Props {
  abouts: AboutInfos
}

const About: React.FC<Props> = ({ abouts }) => {
  return (
    <section className='min-h-screen my-10'>
      <h1 className='text-3xl font-bold mb-5 text-teal-500'>About me</h1>
      <div className='text-xl leading-relaxed font-medium'>
        I am Hsing Ying Li, a graduate student in C.S. at FJU. My research interests include <span className='text-teal-500'>Machine Learning</span> in FinTech. Meanwhile, I also self-learn <span className='text-teal-500'>Web Development</span> and <span className='text-teal-500'>DevOps</span>.
      </div>
      {abouts.map((about, idx) => {
        return (
          <AboutCard key={idx} title={about.title} infoList={about.infoList} />
        )
      })}
    </section>
  )
}

export default About
