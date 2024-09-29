import { FC } from "react";
import Work from "@/components/Work/Work";

const page: FC = () => {
  return (
    <main>
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
            <Work />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
