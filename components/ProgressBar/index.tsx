import React from "react";

interface Props {
  progress: number
  color: string
}

const ProgressBar: React.FC<Props> = ({ progress, color }) => {
  if (progress > 1) progress = 1
  if (progress < 0) progress = 0
  progress *= 100

  return (
    <div className='w-full h-1 rounded-lg relative overflow-hidden'>
      <div className='w-full h-full absolute bg-gray-300'></div>
      <div className='h-full absolute' style={{ width: `${progress}%`, backgroundColor: color }}></div>
    </div>
  )
}

export default ProgressBar
