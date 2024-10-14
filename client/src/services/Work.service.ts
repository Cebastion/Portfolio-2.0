import { IOneWork, IWork, IWorks } from '@/interfaces/Work.interface'
import axios from 'axios'

export class WorkService {
  static async getWorks(): Promise<IWorks[]> {
    const { data } = await axios.get<IWorks[]>('https://server-alpha-tawny.vercel.app/works')
    return data

  }

  static async CreateWork(work: IOneWork) {
    const formData = new FormData();
    formData.append('title', work.title);
    formData.append('year', work.year);
    formData.append('client', work.client ?? '');
    formData.append('role', work.role);
    formData.append('link', work.link);
    formData.append('description', work.description);

    if (work.image) {
      formData.append('image', work.image);
    }
    console.log(formData)
    const { data } = await axios.post<IWork>('http://localhost:5500/works', formData)
    return data
  }

  static async DeleteWork(id: string) {
    const { data } = await axios.delete<IWork>(`https://server-alpha-tawny.vercel.app/works/${id}`)
    return data
  }
}
