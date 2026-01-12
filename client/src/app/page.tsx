'use client'
import ContactMeBlock from '@/components/ContactMeBlock'
import FormGmail from '@/components/FormGmail'
import GitHub from '@/components/Icons/GitHub'
import SamllGitHub from '@/components/Icons/GitHub/Small'
import Linkedin from '@/components/Icons/Linkedin'
import SmallLinked from '@/components/Icons/Linkedin/Small'
import Telegram from '@/components/Icons/Telegram'
import Work from '@/components/Work/Work'
import { IWorks } from '@/interfaces/Work.interface'
import { WorkService } from '@/services/Work.service'
import Image from "next/image"
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [Works, SetWorks] = useState<IWorks[]>()
  const GetWorks = async () => {
    const works = await WorkService.getWorks()
    SetWorks(works.slice(0, 3))
  }

  useEffect(() => {
    GetWorks()
  }, [])

  return (
    <main className="">
      <div className="max-w-[1280px] mx-auto px-3">
        <div className="flex justify-between max-[945px]:flex-col max-[945px]:items-center">
          <div className="flex flex-col justify-center">
            <h2 className='font-BebasNeue font-normal text-8xl text-white'>HI, I AM <p>Dmytro Kosenko.</p></h2>
            <p className='font-manrope font-normal text-lg text-white mt-3 max-w-[544px]'>A Ukrainian full-stack developer with a passion for about building grammarticaly and user frendly web applications.</p>
            <div className="flex gap-2 mt-10">
              <ContactMeBlock />
              <Linkedin />
              <GitHub />
            </div>
          </div>
          <Image height={700} width={600} src={'/image/photo1.jpg'} alt='photo' className='rounded-lg max-w-full max-h-full w-[460px] h-[650px] max-[945px]:mt-10 max-[945px]:w-[80%] max-[945px]:h-[10%]' />
        </div>
        <div className="">
          <h2 className='font-BebasNeue font-normal text-7xl text-white mt-20 max-[945px]:text-5xl'>Featured Projects</h2>
          <p className='font-manrope font-normal text-lg text-white mt-3'>Here are some of the selected projects that showcase my passion for full-stack development.</p>
          <div className="">
          </div>
          {Works?.map(work => (
            <Work work={work} />
          ))}
        </div>
        <div className="flex justify-between mt-20 max-[945px]:justify-center max-[945px]:flex-col max-[945px]:items-center">
          <h2 className='font-BebasNeue font-normal text-[101px] text-white max-[945px]:hidden'>ABOUT ME</h2>
          <div className="max-w-[50%] max-[945px]:max-w-[80%]">
            <h3 className='font-manrope font-medium text-4xl text-white mb-5 max-[945px]:hidden'>I am a full-stack developer based in Ukraine. Has a "Computer Since" background.</h3>
            <p className='font-manrope font-normal text-lg text-white'>I am a full-stack developer based in Ukraine looking for exciting opportunities. Has a "Computer Science" background from the National Technical University 'Kharkiv Polytechnic Institute'. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m honing my skills. While I am not programming, I enjoy train in gym, watch horror, pop film and playing War Thunder. Learning more to improve skill.</p>
            <div className="mt-5 inline-flex border-b border-[#d3e97a] border-solid pb-1 cursor-pointer">
              <Link href={'/about'} className='font-manrope font-bold text-base text-[#d3e97a] uppercase'>More about me</Link>
            </div>
          </div>
          <Image width={600} height={600} src={'/image/photo2.jpg'} alt='photo' className='rounded-lg max-w-full max-h-full w-[350px] h-[500px] mt-5 hidden max-[945px]:block max-[380px]:w-[300px] max-[380px]:h-[420px]' />
        </div>
        <div className="mt-20 pb-3 flex justify-between max-[945px]:flex-col max-[945px]:w-[80%] max-[945px]:mx-auto">
          <div className="">
            <h3 className='font-BebasNeue font-normal text-7xl text-white uppercase max-[945px]:text-5xl'>Let’s connect</h3>
            <p className='font-manrope font-thin text-lg text-white mt-5 max-[380px]:text-sm'>Say hello at <a href="mailto:kosenkodmytro24@gmail.com" className='border-b border-[#d3e97a] border-solid'>kosenkodmytro24@gmail.com</a></p>
            <div className="flex gap-5 mt-5 h-[70%]">
              <SmallLinked />
              <SamllGitHub />
              <Telegram />
            </div>
            <span className='font-manrope font-medium text-lg text-white tracking-widest max-[945px]:hidden'>@{new Date().getFullYear()} Dmytro Kosenko</span>
          </div>
          <FormGmail />
          <span className='font-manrope font-medium text-lg text-white tracking-widest hidden max-[945px]:block mt-10'>@{new Date().getFullYear()} Dmytro Kosenko</span>
        </div>
      </div>
    </main>
  )
}
