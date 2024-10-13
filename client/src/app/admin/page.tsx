
'use client'

import Work from "@/components/Work/Work"
import { IOneWork, IWork, IWorks } from "@/interfaces/Work.interface"
import { WorkService } from "@/services/Work.service"
import axios from "axios"
import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react"

const Page: FC = () => {
  const [form, setForm] = useState<IOneWork>({
    title: '',
    description: '',
    image: null,      // Initialize image as null since it's of type Blob | null
    year: '',
    role: '',
    client: '',       // Optional, can be left as an empty string or undefined
    link: ''
  })

  const [Works, SetWorks] = useState<IWorks[]>()

  const DeleteWork = (id: string) => {
    WorkService.DeleteWork(id)
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setForm((prevForm) => ({ ...prevForm, image: file }))
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prevForm) => ({ ...prevForm, [name]: value }))
  }

  const createWork = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('year', form.year);
      formData.append('client', form.client ?? '');
      formData.append('role', form.role);
      formData.append('link', form.link);
      formData.append('description', form.description);

      if (form.image) {
        formData.append('image', form.image);
      }
      console.log(formData)
      const { data } = await axios.post<IWork>('https://server-elrcvgfwo-cebastions-projects.vercel.app/works', formData)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  const GetWorks = async () => {
    const data = await WorkService.getWorks();
    SetWorks(data)
  }

  useEffect(() => {
    GetWorks()
  }, [])

  return (
    <div>
      <form onSubmit={createWork} id="gmail-form" className="flex flex-col gap-6 items-start max-[945px]:mt-5">
        <div className="flex flex-col gap-1 max-[700px]:w-full">
          <label htmlFor="title" className="font-manrope font-medium text-base text-white">Title</label>
          <input
            value={form.title}
            onChange={handleInputChange}
            name="title"
            type="text"
            className="px-4 py-3 w-[600px] h-14 bg-[#1a1a1a] font-manrope font-normal text-base text-white max-[700px]:w-full"
            required
          />
        </div>

        <div className="flex flex-col gap-1 max-[700px]:w-full">
          <label htmlFor="year" className="font-manrope font-medium text-base text-white">Year</label>
          <input
            value={form.year}
            onChange={handleInputChange}
            name="year"
            type="text"
            className="px-4 py-3 w-[600px] h-14 bg-[#1a1a1a] font-manrope font-normal text-base text-white max-[700px]:w-full"
            required
          />
        </div>

        <div className="flex flex-col gap-1 max-[700px]:w-full">
          <label htmlFor="client" className="font-manrope font-medium text-base text-white">Client</label>
          <input
            value={form.client}
            onChange={handleInputChange}
            name="client"
            type="text"
            className="px-4 py-3 w-[600px] h-14 bg-[#1a1a1a] font-manrope font-normal text-base text-white max-[700px]:w-full"
            required
          />
        </div>

        <div className="flex flex-col gap-1 max-[700px]:w-full">
          <label htmlFor="role" className="font-manrope font-medium text-base text-white">Role</label>
          <input
            value={form.role}
            onChange={handleInputChange}
            name="role"
            type="text"
            className="px-4 py-3 w-[600px] h-14 bg-[#1a1a1a] font-manrope font-normal text-base text-white max-[700px]:w-full"
            required
          />
        </div>

        <div className="flex flex-col gap-1 max-[700px]:w-full">
          <label htmlFor="link" className="font-manrope font-medium text-base text-white">Link</label>
          <input
            value={form.link}
            onChange={handleInputChange}
            name="link"
            type="text"
            className="px-4 py-3 w-[600px] h-14 bg-[#1a1a1a] font-manrope font-normal text-base text-white max-[700px]:w-full"
            required
          />
        </div>

        <div className="flex flex-col gap-1 max-[700px]:w-full">
          <label htmlFor="image" className="font-manrope font-medium text-base text-white">Image</label>
          <input
            onChange={handleFileChange}
            name="image"
            type="file"
            className="px-4 py-3 w-[600px] h-14 bg-[#1a1a1a] font-manrope font-normal text-base text-white max-[700px]:w-full"
            required
          />
        </div>

        <div className="flex flex-col gap-1 max-[700px]:w-full">
          <label htmlFor="description" className="font-manrope font-medium text-base text-white">Description</label>
          <textarea
            value={form.description}
            onChange={handleInputChange}
            name="description"
            className="px-4 py-3 w-[600px] h-40 bg-[#1a1a1a] font-manrope font-normal text-base text-white resize-none max-[700px]:w-full"
            required
          />
        </div>

        <button className="w-36 h-14 rounded-[100px] bg-button-custom-lime font-manrope font-bold text-base uppercase text-black">Submit</button>
      </form>
      <div className="">
        {Works?.map(work => (
          <>
            <Work work={work} />
            <button onClick={() => DeleteWork(work._id)}>Delete</button>
          </>
        ))}
      </div>
    </div>
  )
}

export default Page

