'use client'
import { FC, useEffect, useState } from "react";
import Work from "@/components/Work/Work";
import { IWorks } from "@/interfaces/Work.interface";
import { WorkService } from "@/services/Work.service";

const page: FC = () => {
  const [Works, SetWorks] = useState<IWorks[]>()

  const GetWorks = async () => {
    const works = await WorkService.getWorks()
    SetWorks(works)
  }

  useEffect(() => {
    GetWorks()
  }, [])

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
            {Works?.map(work => (
              <Work work={work} />
            ))}
          </div>
        </div>
      </div>
    </main >
  );
};

export default page;
