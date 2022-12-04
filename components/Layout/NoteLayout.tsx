import React from "react"
import PopoverMenu from "../Popover"

interface Props {
  children: React.ReactNode
}

const NoteLayout: React.FC<Props> = ({ children }) => {

  return (
    <div className='mt-[80px]'>
      <PopoverMenu />
      {children}
    </div>
  )
}

export default NoteLayout

