type Note = {
  id: number
  title: string
  category: Category
}

type Category = {
  id?: number
  category: string
}

type CategoryGroup = {
  [key: string]: Array<Note>
}


type GetNoteResponse = {
  id: number
  content: string
}


export type {
  Note,
  Category,
  CategoryGroup,
  GetNoteResponse
}
