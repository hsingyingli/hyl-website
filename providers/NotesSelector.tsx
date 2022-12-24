import React, { createContext, useEffect, useMemo, useState } from "react";
import Loading from "../components/Loading";
import { CategoryGroup, Note } from "../utils/types/note";


interface NoteSelectorContextInterface {
  category: CategoryGroup
  noteList: Array<Note>
  selectedNoteId: number | null
  handleSelectNote: (id: number | null) => void
}

const NoteSelectorContext = createContext<NoteSelectorContextInterface>({
  category: {},
  noteList: [],
  selectedNoteId: null,
  handleSelectNote: (id: number | null) => { }
})


interface Props {
  children: React.ReactNode
}

interface LooseObject {
  [key: string]: any
}

const NoteSelector: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [noteList, setNoteList] = useState<Array<Note>>([])
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null)

  useEffect(() => {
    const fetchNotes = async () => {
      const res = await fetch('/api/note', { method: 'GET' })
      const { data, error } = await res.json()

      if (error) return
      setNoteList(data)

    }
    fetchNotes().finally(() => setIsLoading(false))
  }, [])

  const category = useMemo(() => {
    if (noteList.length > 0) {
      const groupByCategory = noteList.reduce((group: LooseObject, note) => {
        const { category } = note;
        group[category.category] = group[category.category] ?? [];
        group[category.category].push(note);
        return group;
      }, {});
      return groupByCategory
    }
    return {}
  }, [noteList])

  const handleSelectNote = (id: number | null) => {
    setSelectedNoteId(id)
  }

  return (
    isLoading ?
      <Loading />
      : (
        <NoteSelectorContext.Provider value={{
          category,
          noteList,
          selectedNoteId,
          handleSelectNote
        }}>
          {children}
        </NoteSelectorContext.Provider>
      )
  )
}

export default NoteSelector

export { NoteSelectorContext }
