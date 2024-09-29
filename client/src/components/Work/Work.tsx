import { IWork } from '@/interfaces/Work.interface'
import { FC } from 'react'
import Image from "next/image"

const Work: FC = () => {
  return (
    <div className="flex gap-12 mt-20 items-center max-[945px]:flex-col">
      <Image width={600} height={600} src={'/image/work.png'} alt='work' className='rounded-lg' />
      <div className="">
        <h3 className='font-manrope font-medium text-4xl text-white'>Numerology</h3>
        <p className='font-manrope font-normal text-lg leading-none text-white mt-5'>My finished order about the site matrix where you can calculate future, compatibility, your matrix!</p>
        <div className="mt-5">
          <h4 className='font-manrope font-semibold text-base text-white uppercase mb-3'>Project Info</h4>
          <div className="flex justify-between py-3 border-t border-b border-[#484848] border-solid">
            <span className='font-manrope font-semibold text-base text-white'>Year</span>
            <span className='font-manrope font-semibold text-base text-white'>2024</span>
          </div>
          <div className="flex justify-between py-3 border-b border-[#484848] border-solid">
            <span className='font-manrope font-semibold text-base text-white'>Role</span>
            <span className='font-manrope font-semibold text-base text-white'>Front-End</span>
          </div>
        </div>
        <div className="mt-5 inline-flex items-center border-b border-[#d3e97a] border-solid pb-1 cursor-pointer">
          <span className='font-manrope font-bold text-base text-[#d3e97a] uppercase mr-2'>View project</span>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_7_140)">
              <path d="M5.9897 19.7174L16.3036 9.40357V16.889L18.3033 16.889L18.3033 5.98966L7.40391 5.98966L7.40391 7.98936L14.8893 7.98936L4.57549 18.3032L5.9897 19.7174Z" fill="#D3E97A" />
            </g>
            <defs>
              <clipPath id="clip0_7_140">
                <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Work