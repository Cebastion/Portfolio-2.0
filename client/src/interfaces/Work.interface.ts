export interface IWork {
  work: {
    id: number
    title: string
    description: string
    image: string
    url: string
    year: number
    role: string
    client?: string
    link: string
  }
}