'use client'

import { IWork } from '@/interfaces/Work.interface'
import { FC, useMemo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

/* ---------------- animations ---------------- */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
} as any

const fadeImage = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
} as any

/* ---------------- component ---------------- */

const Work: FC<IWork> = ({ work }) => {

  const imageSrc = useMemo(() => {
    const buffer = new Uint8Array(work.image.data)
    const binaryString = buffer.reduce(
      (acc, byte) => acc + String.fromCharCode(byte),
      ''
    )
    return `data:image/png;base64,${btoa(binaryString)}`
  }, [work.image.data])

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex gap-12 mt-20 items-center max-[945px]:flex-col"
    >
      {/* IMAGE */}
      <motion.div variants={fadeImage} className="w-[600px] max-[645px]:w-full flex shrink-0">
        <Image
          width={600}
          height={600}
          src={imageSrc}
          alt="work"
          className="rounded-lg"
        />
      </motion.div>

      {/* CONTENT */}
      <motion.div variants={container}>
        <motion.h3
          variants={fadeUp}
          className="font-manrope font-medium text-4xl text-white"
        >
          {work.title}
        </motion.h3>

        <motion.p
          variants={fadeUp}
          className="font-manrope text-lg text-white mt-5"
        >
          {work.description}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-5">
          <h4 className="font-manrope font-semibold text-base text-white uppercase mb-3">
            Project Info
          </h4>

          <div className="flex justify-between py-3 border-t border-b border-[#484848]">
            <span className="font-manrope font-semibold text-white">Year</span>
            <span className="font-manrope font-semibold text-white">
              {work.year}
            </span>
          </div>

          <div className="flex justify-between py-3 border-b border-[#484848]">
            <span className="font-manrope font-semibold text-white">Role</span>
            <span className="font-manrope font-semibold text-white">
              {work.role}
            </span>
          </div>
        </motion.div>

        {/* LINK */}
        <motion.div
          variants={fadeUp}
          whileHover={{ x: 6 }}
          className="mt-5 inline-flex items-center border-b border-[#d3e97a] pb-1 cursor-pointer"
          onClick={() => window.open(work.link, '_blank')}
        >
          <span className="font-manrope font-bold text-[#d3e97a] uppercase mr-2">
            View project
          </span>

          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.9897 19.7174L16.3036 9.40357V16.889H18.3033V5.98966H7.40391V7.98936H14.8893L4.57549 18.3032L5.9897 19.7174Z"
              fill="#D3E97A"
            />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Work

