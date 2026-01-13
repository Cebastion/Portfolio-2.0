'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
import { motion } from 'framer-motion'
import Loader from '@/components/Loader'
/* ---------------- animations ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export default function HomePage() {
  const [Works, SetWorks] = useState<IWorks[]>()
  const [pending, SetPending] = useState(false)

  const GetWorks = useCallback(async () => {
    SetPending(true)
    const works = await WorkService.getWorks().finally(() => SetPending(false))
    SetWorks(works.slice(0, 3))
  }, [])

  useEffect(() => {
    GetWorks()
  }, [])

  const ListWork = useMemo(() => {
    return Works?.map((work) => <Work work={work} key={work._id} />)
  }, [Works])

  return (
    <main>
      <div className="max-w-[1280px] mx-auto px-3">

        {/* ---------------- HERO ---------------- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
          className="flex justify-between max-[945px]:flex-col max-[945px]:items-center"
        >
          <div className="flex flex-col justify-center">
            <motion.h2
              variants={fadeUp}
              className="font-BebasNeue text-8xl text-white"
            >
              HI, I AM <p>Dmytro Kosenko.</p>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-manrope text-lg text-white mt-3 max-w-[544px]"
            >
              A Ukrainian full-stack developer with a passion for building
              grammatically and user friendly web applications.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex gap-2 mt-10"
            >
              <ContactMeBlock />
              <Linkedin />
              <GitHub />
            </motion.div>
          </div>

          <motion.div variants={fadeScale}>
            <Image
              height={700}
              width={600}
              src="/image/photo1.jpg"
              alt="photo"
              className="rounded-lg w-[460px] h-[650px] max-[945px]:mt-10 max-[945px]:w-[80%]"
            />
          </motion.div>
        </motion.section>

        {/* ---------------- PROJECTS ---------------- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="mt-20"
        >
          <motion.h2
            variants={fadeUp}
            className="font-BebasNeue text-7xl text-white max-[945px]:text-5xl"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-manrope text-lg text-white mt-3"
          >
            Here are some of the selected projects that showcase my passion for
            full-stack development.
          </motion.p>

          <div className="mt-10 flex flex-col gap-10">
            {pending && <Loader />}
            {!pending && ListWork}
          </div>
        </motion.section>

        {/* ---------------- ABOUT ---------------- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="flex justify-between mt-20 max-[945px]:flex-col max-[945px]:items-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-BebasNeue text-[101px] text-white max-[945px]:hidden"
          >
            ABOUT ME
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="max-w-[50%] max-[945px]:max-w-[80%]"
          >
            <h3 className="font-manrope text-4xl text-white mb-5 max-[945px]:hidden">
              I am a full-stack developer based in Ukraine.
            </h3>

            <p className="font-manrope text-lg text-white">
              I am a full-stack developer based in Ukraine looking for exciting
              opportunities. Has a "Computer Science" background from the
              National Technical University "Kharkiv Polytechnic Institute".
            </p>

            <div className="mt-5 inline-flex border-b border-[#d3e97a] pb-1">
              <Link
                href="/about"
                className="font-manrope font-bold text-[#d3e97a] uppercase"
              >
                More about me
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeScale} className="hidden max-[945px]:block mt-5">
            <Image
              width={600}
              height={600}
              src="/image/photo2.jpg"
              alt="photo"
              className="rounded-lg w-[350px] h-[500px]"
            />
          </motion.div>
        </motion.section>

        {/* ---------------- CONTACT ---------------- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="mt-20 pb-10 flex justify-between max-[945px]:flex-col max-[945px]:w-[80%] max-[945px]:mx-auto"
        >
          <motion.div variants={fadeUp}>
            <h3 className="font-BebasNeue text-7xl text-white uppercase max-[945px]:text-5xl">
              Let’s connect
            </h3>

            <motion.p variants={fadeUp} className="font-manrope font-thin text-lg text-white mt-5 max-[380px]:text-sm">
              Say hello at{" "}
              <a
                href="mailto:kosenkodmytro24@gmail.com"
                className="border-b border-[#d3e97a] border-solid hover:text-[#d3e97a] transition-colors"
              >
                kosenkodmytro24@gmail.com
              </a>
            </motion.p>


            <div className="flex gap-5 mt-5">
              <SmallLinked />
              <SamllGitHub />
              <Telegram />
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <FormGmail />
          </motion.div>
        </motion.section>

      </div>
    </main>
  )
}

