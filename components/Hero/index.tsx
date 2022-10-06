import React from "react";
import { FaArrowDown } from 'react-icons/fa'
import Text from "./text";


const Hero: React.FC = () => {
  const firstLine = 'Hi, I am Hsing Ying Li'
  const secondLine = 'welcome to my website!'
  const thirdLine = '( Machine Learning / Web development / Devops)'

  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-3 relative animate-[fadeIn_2s_ease-in-out]'>
      <p className='text-5xl font-bold'>
        <Text text={firstLine} />
      </p>
      <p className='text-4xl font-bold '>
        <Text text={secondLine} />
      </p>
      <p className='text-2xl font-bold'>
        <Text text={thirdLine} />
      </p>
      <div className='absolute bottom-8 border-2 border-gray-400 p-2 rounded-full animate-bounce'>
        <FaArrowDown />
      </div>
    </div>
  )
}


export default Hero
