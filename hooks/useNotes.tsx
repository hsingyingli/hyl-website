import React, { useContext } from "react";
import { NoteSelectorContext } from "../providers/NotesSelector";


const useNotes = () => {
  return useContext(NoteSelectorContext)
}

export default useNotes
