'use client'
import ContactMeBlock from '@/components/ContactMeBlock'
import FormGmail from '@/components/FormGmail'
import GitHub from '@/components/Icons/GitHub'
import Linkedin from '@/components/Icons/Linkedin'
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
              <div className="cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/dmytro-kosenko-49b4ab27b/', '_blank')}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.644 9.59602C8.2552 9.59602 9.56134 8.28988 9.56134 6.67869C9.56134 5.06749 8.2552 3.76135 6.644 3.76135C5.0328 3.76135 3.72667 5.06749 3.72667 6.67869C3.72667 8.28988 5.0328 9.59602 6.644 9.59602Z" fill="#D3E97A" />
                  <path d="M12.316 11.8067V27.992H17.3413V19.988C17.3413 17.876 17.7387 15.8307 20.3573 15.8307C22.94 15.8307 22.972 18.2453 22.972 20.1213V27.9933H28V19.1173C28 14.7573 27.0613 11.4067 21.9653 11.4067C19.5187 11.4067 17.8787 12.7493 17.208 14.02H17.14V11.8067H12.316ZM4.12666 11.8067H9.16V27.992H4.12666V11.8067Z" fill="#D3E97A" />
                </svg>
              </div>
              <div className="cursor-pointer" onClick={() => window.open('https://github.com/Cebastion', '_blank')}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0347 2.66669C8.68933 2.66669 2.73599 8.62002 2.73599 15.9654C2.73599 21.84 6.54533 26.8254 11.8307 28.5854C12.496 28.7054 12.736 28.296 12.736 27.944C12.736 27.628 12.7253 26.7907 12.7213 25.6827C9.02133 26.4854 8.23999 23.8987 8.23999 23.8987C7.63733 22.3627 6.76399 21.9534 6.76399 21.9534C5.55733 21.128 6.85599 21.1467 6.85599 21.1467C8.19199 21.24 8.89199 22.5174 8.89199 22.5174C10.0787 24.5494 12.0067 23.9627 12.7613 23.6227C12.8827 22.7627 13.2293 22.176 13.608 21.844C10.656 21.5094 7.55199 20.368 7.55199 15.2707C7.55199 13.8214 8.07066 12.632 8.91733 11.704C8.78266 11.3667 8.32266 10.0134 9.04933 8.18402C9.04933 8.18402 10.1653 7.82535 12.7053 9.54535C13.7901 9.25025 14.9091 9.09961 16.0333 9.09735C17.1576 9.09918 18.2766 9.24982 19.3613 9.54535C21.9027 7.82402 23.0173 8.18402 23.0173 8.18402C23.744 10.0134 23.288 11.3667 23.1493 11.704C24.0027 12.632 24.5147 13.82 24.5147 15.2707C24.5147 20.3814 21.408 21.504 18.4453 21.8334C18.9187 22.244 19.3453 23.0547 19.3453 24.2947C19.3453 26.0734 19.3293 27.508 19.3293 27.944C19.3293 28.3 19.5667 28.7134 20.2453 28.5827C25.528 26.82 29.3333 21.8387 29.3333 15.9654C29.3333 8.62002 23.38 2.66669 16.0347 2.66669Z" fill="#D3E97A" />
                </svg>
              </div>
              <div className="cursor-pointer" onClick={() => window.open('https://t.me/DmytroKosenko', '_blank')}>
                <svg fill="#D3E97A" width="32px" height="32px" viewBox="-2 -2 24.00 24.00" xmlns="http://www.w3.org/2000/svg" stroke="#D3E97A" stroke-width="0.0002" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.28"></g><g id="SVGRepo_iconCarrier"><path d="M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M14.4415206,6 C14.060553,6.00676048 13.476055,6.20741135 10.663148,7.36249773 C9.67796175,7.7670526 7.70897661,8.60437935 4.75619264,9.87447795 C4.27670659,10.0627254 4.02553067,10.2468857 4.00266485,10.4269588 C3.95876487,10.7726802 4.46291296,10.8803081 5.09723696,11.0838761 C5.61440201,11.2498453 6.31007997,11.4440124 6.67173438,11.4517262 C6.99978943,11.4587234 7.36593635,11.3251987 7.77017511,11.051152 C10.5290529,9.21254679 11.9531977,8.28322679 12.0426094,8.26319203 C12.1056879,8.24905787 12.1930992,8.23128593 12.2523244,8.28325656 C12.3115496,8.33522719 12.3057275,8.43364956 12.299454,8.46005377 C12.2492926,8.67117474 9.65764825,10.998457 9.50849738,11.1513987 L9.43697409,11.2233057 C8.88741493,11.7661123 8.33196049,12.1205055 9.290333,12.7440164 C10.155665,13.3069957 10.6592923,13.6661378 11.5507686,14.2430701 C12.1204738,14.6117635 12.5671299,15.0489784 13.1553348,14.9955401 C13.4259939,14.9709508 13.705567,14.7196888 13.8475521,13.9703127 C14.1831052,12.1993135 14.8426779,8.36209709 14.9951103,6.78087197 C15.0084653,6.64233621 14.9916649,6.46503787 14.9781732,6.38720805 C14.9646815,6.30937823 14.9364876,6.19848702 14.8340164,6.11639754 C14.7126597,6.01917896 14.5253109,5.99867765 14.4415206,6 Z"></path></g></svg>
              </div>
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
