import React, { useRef } from "react";
import { FaArrowDown } from 'react-icons/fa'
import useScroll from "../../hooks/useScroll";
import Text from "./text";


const Hero: React.FC = () => {
  const { scrollY } = useScroll()
  const refContainer = useRef<HTMLDivElement>(null)

  const { current: elContainer } = refContainer
  let opacity = 1
  if (elContainer) {
    const { offsetTop } = elContainer
    console.log(scrollY)
    console.log(offsetTop)
    opacity = 1 - (Math.min(scrollY, offsetTop) * 2 / offsetTop)
    console.log(opacity)
  }

  const firstLine = 'Hi, I am Hsing Ying Li'
  const secondLine = 'welcome to my website!'
  const thirdLine = '( Machine Learning / Web development / Devops)'

  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-3 relative animate-[fadeIn_2s_ease-in-out]'>
      <p className='text-3xl md:text-4xl lg:text-5xl font-bold text-center'>
        <Text text={firstLine} />
      </p>
      <p className='text-2xl md:text-3xl lg:text-4xl font-bold text-center'>
        <Text text={secondLine} />
      </p>
      <p className='text-lg md:text-xl lg:text-2xl font-bold text-center'>
        <Text text={thirdLine} />
      </p>
      <div ref={refContainer} className='absolute bottom-8 border-2 border-gray-400 p-2 rounded-full animate-bounce' style={{ opacity: opacity }}>
        <FaArrowDown />
      </div>
    </div>
  )
}


export default Hero
