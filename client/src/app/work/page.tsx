'use client'
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import Work from "@/components/Work/Work";
import { IWorks } from "@/interfaces/Work.interface";
import { WorkService } from "@/services/Work.service";
import { motion } from "framer-motion";

const page: FC = () => {
  const [Works, SetWorks] = useState<IWorks[]>()
  const [pending, SetPending] = useState(false)

  const GetWorks = useCallback(async () => {
    SetPending(true)
    const works = await WorkService.getWorks().finally(() => SetPending(false))
    SetWorks(works)
  }, [])

  useEffect(() => {
    GetWorks()
  }, [])

  const ListWork = useMemo(() => {
    return Works?.map((work) => <Work work={work} key={work._id} />)
  }, [Works])


  return (
    < main >
      <div className="max-w-[1280px] mx-auto px-3">
        <div className="">
          <h2 className="font-BebasNeue font-normal text-7xl text-white mt-20 max-[945px]:text-5xl">
            Featured Projects
          </h2>
          <p className="font-manrope font-normal text-lg text-white mt-3">
            Here are some of the selected projects that showcase my passion for
            full-stack development.
          </p>
          <div className="">
            {pending && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                <motion.div
                  className="relative w-12 h-12"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, ease: 'linear', duration: 1 }}
                >
                  <div className="absolute inset-0 rounded-full border-4 border-[#2a2a2a]" />
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-t-[#d3e97a] shadow-[0_0_14px_#d3e97a]"
                    animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  />
                </motion.div>
              </div>
            )}
            {!pending && ListWork}
          </div>
        </div>
      </div>
    </main >
  );
};

export default page;
