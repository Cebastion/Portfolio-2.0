export interface IWork {
  work: {
    _id: string
    title: string
    description: string
    image: {
      data: number[],
      type: string
    }
    year: string
    role: string
    client?: string
    link: string
  }
}

export interface IWorks {
  _id: string
  title: string
  description: string
  image: {
    data: number[],
    type: string
  }
  year: string
  role: string
  client?: string
  link: string
}

export interface IOneWork {
  title: string
  description: string
  image: File | null
  year: string
  role: string
  client?: string
  link: string
}

