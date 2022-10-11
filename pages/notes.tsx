import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import type { NextPage } from 'next'
import { Note, Notes } from "../utils/types/note";
import PopoverMenu from "../components/Popover";
const Markdown = dynamic(
  () => {
    return import("../components/Markdown");
  },
  { ssr: false }
);

const Nosts: NextPage = () => {
  const [notes, setNotes] = useState<Notes | null>(null)
  const [note, setNote] = useState<Note | null>(null)

  const initMD = `# Hello Friend
***These Notes are written using one of my practical web project [Markdown Note Editor](https://hyl-md-notebook.vercel.app/)***
![image](https://drive.google.com/uc?export=view&id=1nGwUtZdhWvzMAxzg6zJ2ChDPaSzeIxAV)
![image](https://drive.google.com/uc?export=view&id=19LVN3pWcg3g68EUjRNA8TD8V2gXeOIMp)
`

  useEffect(() => {
    const fetchNotes = async () => {
      const res = await fetch('/api/note', { method: 'GET' })
      const { data, error } = await res.json()
      if (error) return
      setNotes(data)
      setNote(data[0].content)
    }
    fetchNotes()
  }, [])

  const selectNote = (n: Note | null) => {
    setNote(n)
  }

  return (
    <div className='mt-[80px]'>
      <PopoverMenu notes={notes} note={note} selectNote={selectNote} />
      <Markdown md={note?.content || initMD} />
    </div>
  )
}

export default Nosts
