import React, { useRef, useState, Fragment } from "react";
import { AboutInfo } from '../../utils/types/about'
import useScroll from '../../hooks/useScroll'

const AboutCard: React.FC<AboutInfo> = ({ title, infoList }) => {
  const { scrollY } = useScroll()
  const refContainer = useRef<HTMLDivElement>(null)
  const { current: elContainer } = refContainer

  let opacity = 0

  if (elContainer) {
    const { offsetTop, clientHeight } = elContainer
    const halfH = window.innerHeight / 2
    let current = (scrollY - offsetTop - clientHeight / 2 + halfH)
    current = current > 0 ? current : -current
    opacity = Math.max(1 - current * 0.5 / clientHeight, 0.1)
  }

  return (
    <div ref={refContainer} style={{ opacity }} className='my-7 mx-2 p-2'>
      <h1 className='font-bold text-xl'>{title}</h1>
      <ul className="mt-5 list-outside list-disc">
        {infoList.map((info, idx) => {
          return <li key={idx} className='text-lg my-2'>{info}</li>
        })}
      </ul>
    </div >
  )
}

export default AboutCard
