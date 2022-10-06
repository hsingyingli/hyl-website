import React, { useState, useEffect, useCallback, createContext } from 'react'
import { ScrollValue } from '../utils/types/scroll'

interface Props {
  children: React.ReactNode
}

const ScrollContext = createContext<ScrollValue>({ scrollY: 0 })

const ScrollObserver: React.FC<Props> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0)
  const handleOnScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', handleOnScroll, { passive: true })

    return () => document.removeEventListener('scroll', handleOnScroll)
  }, [handleOnScroll])

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  )
}


export default ScrollObserver
export {
  ScrollContext
}
