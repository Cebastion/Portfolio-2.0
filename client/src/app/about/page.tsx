"use client"
import Image from "next/image"
import { FC } from "react"
import { motion } from "framer-motion";
import ContactMeBlock from "@/components/ContactMeBlock"
import GitHub from "@/components/Icons/GitHub"
import Linkedin from "@/components/Icons/Linkedin"
import FormGmail from "@/components/FormGmail"
import SamllGitHub from "@/components/Icons/GitHub/Small";
import SmallLinked from "@/components/Icons/Linkedin/Small";
import Telegram from "@/components/Icons/Telegram";

const page: FC = () => {
  const list_skills = [
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "RTK Query",
    "Motion",
    "TailwindCSS",
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };


  const stagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };


  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main>
      <div className="max-w-[1280px] mx-auto px-3">
        <div className="flex justify-between mt-20 max-[945px]:justify-center max-[945px]:flex-col max-[945px]:items-center">
          <motion.h2 variants={fadeUp as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} className="font-BebasNeue font-normal text-[101px] text-white text-left max-[945px]:text-7xl max-[945px]:mb-5">
            ABOUT ME
          </motion.h2>
          <motion.div variants={fadeUp as any}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }} className="max-w-[50%] max-[945px]:max-w-[80%]">
            <h3 className="font-manrope font-medium text-4xl text-white mb-5 max-[945px]:hidden">
              I am a full-stack developer based in Ukraine. Has a "Computer
              Since" background.
            </h3>
            <p className="font-manrope font-normal text-lg text-white">
              I am a full-stack developer based in Ukraine looking for exciting
              opportunities. Has a "Computer Since" background from the National
              Technical University 'Kharkiv Polytechnic Institute'. Likes to
              focus on accessibility when developing. Passionate and curious
              about solving problems. Currently, I’m honing my skills. While I
              am not programming, I enjoy train in gym, watch horror, pop film
              and playing War Thunder. Learning more to improve skill.
            </p>
            <div className="flex gap-2 mt-10">
              <ContactMeBlock />
              <Linkedin />
              <GitHub />
            </div>
          </motion.div>
        </div>
        <div className="flex gap-5 mt-5 justify-center">
          <Image
            width={1224}
            height={700}
            src={"/image/photo3.jpg"}
            alt=""
            className="rounded-lg max-w-full max-h-full h-[600px] w-[400px]  max-[845px]:hidden"
          />
          <Image
            width={1224}
            height={700}
            src={"/image/photo4.jpg"}
            alt=""
            className="rounded-lg max-w-full max-h-full h-[600px] w-[400px] max-[420px]:w-[320px] max-[420px]:h-[450px]"
          />
          <Image
            width={1224}
            height={700}
            src={"/image/photo5.jpg"}
            alt=""
            className="rounded-lg max-w-full max-h-full h-[600px] w-[400px] max-[1350px]:hidden"
          />
        </div>
        <div className="flex justify-between mt-14 max-[820px]:flex-col max-[820px]:items-center">

          <h2 className="font-normal text-7xl text-white font-BebasNeue max-[820px]:mb-5 max-[820px]:text-6xl">

            My Capabilities
          </h2>
          <div className="w-[50%] max-[820px]:w-[80%]">

            <h6 className="font-normal text-lg font-manrope text-white">

              I am always looking to add more skills.Morbi egestas neque eu
              blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
              purus faucibus tristique ut et dolor.
            </h6>
            <div className="flex mt-4 flex-wrap gap-3 max-[820px]:justify-center">

              {list_skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-[100px] max-w-[124px] max-h-[56px] w-full h-full flex items-center justify-center p-3 border-solid border-[#484848] border-2 text-base text-white font-bold font-manrope max-[350px]:w-[100px]"
                >

                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-14 max-[820px]:flex-col max-[820px]:items-center">
          <h2 className="font-normal text-7xl text-white font-BebasNeue max-[820px]:mb-5 max-[820px]:text-6xl">
            My Experience
          </h2>
          <div className='w-[50%] max-[820px]:w-[80%]'>
            <div className="">
              <div className="w-full flex justify-between mb-3">
                <span className="text-2xl font-medium text-white font-manrope">
                  Freelance Developer
                </span>
                <span className="font-manrope font-normal text-lg font-[#c7c7c7]">
                  Jun 2022 - January 2025
                </span>
              </div>
              <p className="font-manrope font-normal text-lg font-[#c7c7c7]">
                From 2022 to present I working by freelance. Started career in
                Kwork. Completed 15+ different project. Now, I'm planning to
                continue myself career in Upwork or Peoeple Per Hour.
              </p>
            </div>
            <div className="mt-5">
              <div className="w-full flex justify-between mb-3">
                <span className="text-2xl font-medium text-white font-manrope">
                  Technical support specialist
                </span>
                <span className="font-manrope font-normal text-lg font-[#c7c7c7]">
                  January 2025 - Present
                </span>
              </div>
              <p className="font-manrope font-normal text-lg font-[#c7c7c7]">
                I have been working as a Technical Support Specialist at UniTalk, Kyiv (Telecommunications, Communication) since January 2025, focusing on testing, technical support, service monitoring, integrations, and troubleshooting.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 pb-3 flex justify-between max-[945px]:flex-col max-[945px]:w-[80%] max-[945px]:mx-auto">

          <div className="">

            <h3 className="font-BebasNeue font-normal text-7xl text-white uppercase max-[945px]:text-5xl">

              Let’s connect
            </h3>
            <p className='font-manrope font-thin text-lg text-white mt-5 max-[380px]:text-sm'>Say hello at <a href="mailto:kosenkodmytro24@gmail.com" className='border-b border-[#d3e97a] border-solid'>kosenkodmytro24@gmail.com</a></p>
            <div className="flex gap-5 mt-5 h-[70%]">
              <SmallLinked />
              <SamllGitHub />
              <Telegram />
            </div>
            <span className="font-manrope font-medium text-lg text-white tracking-widest max-[945px]:hidden">
              @{new Date().getFullYear()} Dmytro Kosenko
            </span>
          </div>
          <FormGmail />
          <span className="font-manrope font-medium text-lg text-white tracking-widest hidden max-[945px]:block mt-10">
            @{new Date().getFullYear()} Dmytro Kosenko
          </span>
        </div>
      </div>
    </main >
  )
}

export default page
