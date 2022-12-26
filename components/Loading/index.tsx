import React from "react";


const Loading = () => {
  return (
    <div className='absolute top-0 left-0 w-[calc(100vw_-_1.5rem)] h-[calc(100vh_-_1.5rem)] flex items-center justify-center gap-5'>
      <div style={{ animationDelay: '-0.32s' }} className='animate-dot-bounce h-4 w-4 rounded-full bg-gray-500'></div>
      <div style={{ animationDelay: '-0.16s' }} className='animate-dot-bounce h-4 w-4 rounded-full bg-gray-500'></div>
      <div className='animate-dot-bounce h-4 w-4 rounded-full bg-gray-500'></div>
    </div>
  )
}

export default Loading
