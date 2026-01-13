'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'

const Loader: FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full my-10">
      <motion.div
        className="relative w-12 h-12"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 1 }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-[#2a2a2a]" />
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-t-[#d3e97a] shadow-[0_0_14px_#d3e97a]"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: 'linear'
          }}
        />
      </motion.div>
    </div>
  )
}

export default Loader
