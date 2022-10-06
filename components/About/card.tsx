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
    let current = (scrollY - offsetTop + halfH)
    current = current > 0 ? current : -current
    opacity = Math.max(1 - current * 0.8 / clientHeight, 0.2)
    console.log(opacity)
  }

  return (
    <div ref={refContainer} style={{ opacity }} className='border-2 rounded-lg border-gray-300'>
      <h1>{title}</h1>
      <div>
        <ul>
          {infoList.map((info, idx) => {
            return <li key={idx}>{info}</li>
          })}
        </ul>
      </div>
    </div >
  )
}

export default AboutCard
