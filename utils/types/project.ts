type Project = {
  id: number
  title: string
  image: Array<string>
  description: string
  website: string
  source: string
  backend?: string
  stack: Array<string>
}

type ProjectArray = Array<Project>

export type {
  Project,
  ProjectArray
}
