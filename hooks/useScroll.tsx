import { useContext } from 'react'
import { ScrollContext } from '../providers/ScrollObserver'

const useScroll = () => {
  return useContext(ScrollContext)
}

export default useScroll
