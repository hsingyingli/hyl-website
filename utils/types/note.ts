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
  data: {
    id: number
    content: string
  } | null,
  error: string | null
}

type GetNoteIdResponse = {
  data: Array<number>
  error: string | null
}


export type {
  Note,
  Category,
  CategoryGroup,
  GetNoteResponse,
  GetNoteIdResponse
}
