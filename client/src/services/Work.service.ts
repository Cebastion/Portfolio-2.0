import { IWork } from '@/interfaces/Work.interface'
import axios from 'axios'

export class WorkService {
  static async getWorks() {
    const { data } = await axios.get<IWork>('http://localhost:5500/works')
    return data
  }

  static async CreateWork(work: IWork) {
    const { data } = await axios.post<IWork>('http://localhost:5500/works', work)
    return data
  }

  static async UpdateWork(id: number, work: IWork) {
    const { data } = await axios.patch<IWork>(`http://localhost:5500/works/${id}`, work)
    return data
  }

  static async DeleteWork(id: number) {
    const { data } = await axios.delete<IWork>(`http://localhost:5500/works/${id}`)
    return data
  }
}