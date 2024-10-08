'use client'

import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import Head from 'next/head'

const Header: FC = () => {
  const [Active, SetActive] = useState(false)

  useEffect(() => {
    if (Active) {
      // Disable scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Enable scrolling
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [Active]);

  const ToggleMenu = () => {
    SetActive(!Active)
  }

  const ScrollToGmailForm = () => {
    SetActive(false)

    setTimeout(() => {
      document.getElementById('gmail-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <header className="w-full py-5 px-3">
        <div className="flex max-w-1440 mx-auto items-center max-mobile:justify-between">
          <h1 className="text-white font-BebasNeue font-normal text-3xl z-10">Dmytro Kosenko</h1>
          <nav className={Active ? "absolute top-0 left-0 h-full w-full bg-black flex flex-col items-center justify-center gap-10" : "max-mobile:hidden flex ml-auto gap-10"}>
            <Link className='font-inter font-medium text-base text-white' href='/work'>Work</Link>
            <Link className='font-inter font-medium text-base text-white' href='/about'>About</Link>
            <span className='font-inter font-medium text-base text-white cursor-pointer' onClick={ScrollToGmailForm}>Contact</span>
          </nav>
          <div className="mobile:hidden cursor-pointer flex p-4 focus:outline-none gap-2 flex-col relative z-10" onClick={ToggleMenu}>
            <div className={`transition-all w-10 h-0.5 bg-white mb-1 rounded-md ${Active ? 'rotate-45 absolute' : ''}`}/>
            <div className={`transition-all w-10 h-0.5 bg-white mb-1 rounded-md ${Active ? '-rotate-45' : ''}`}/>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header