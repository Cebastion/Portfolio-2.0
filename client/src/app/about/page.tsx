"use client";
import Image from "next/image";
import { FC } from "react";
import { motion, Variants } from "framer-motion";
import ContactMeBlock from "@/components/ContactMeBlock";
import GitHub from "@/components/Icons/GitHub";
import Linkedin from "@/components/Icons/Linkedin";
import FormGmail from "@/components/FormGmail";
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
  ];

  // Animation Variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const stagger: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <main>
      <div className="max-w-[1280px] mx-auto px-3">

        {/* --- HERO SECTION --- */}
        <div className="flex justify-between mt-20 max-[945px]:justify-center max-[945px]:flex-col max-[945px]:items-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-BebasNeue font-normal text-[101px] text-white text-left max-[945px]:text-7xl max-[945px]:mb-5"
          >
            ABOUT ME
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[50%] max-[945px]:max-w-[80%]"
          >
            <h3 className="font-manrope font-medium text-4xl text-white mb-5 max-[945px]:hidden">
              I am a full-stack developer based in Ukraine. Has a "Computer Since" background.
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

        {/* --- IMAGES SECTION --- */}
        {/* Added stagger to the container and item variants to images */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex gap-5 mt-5 justify-center"
        >
          {/* Wrapped images in motion.div to handle layout classes without breaking Image component */}
          <motion.div variants={item} className="max-[845px]:hidden">
            <Image
              width={1224}
              height={700}
              src={"/image/photo3.jpg"}
              alt=""
              className="rounded-lg max-w-full max-h-full h-[600px] w-[400px]"
            />
          </motion.div>

          <motion.div variants={item}>
            <Image
              width={1224}
              height={700}
              src={"/image/photo4.jpg"}
              alt=""
              className="rounded-lg max-w-full max-h-full h-[600px] w-[400px] max-[420px]:w-[320px] max-[420px]:h-[450px]"
            />
          </motion.div>

          <motion.div variants={item} className="max-[1350px]:hidden">
            <Image
              width={1224}
              height={700}
              src={"/image/photo5.jpg"}
              alt=""
              className="rounded-lg max-w-full max-h-full h-[600px] w-[400px]"
            />
          </motion.div>
        </motion.div>

        {/* --- CAPABILITIES SECTION --- */}
        <div className="flex justify-between mt-14 max-[820px]:flex-col max-[820px]:items-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-normal text-7xl text-white font-BebasNeue max-[820px]:mb-5 max-[820px]:text-6xl"
          >
            My Capabilities
          </motion.h2>

          <div className="w-[50%] max-[820px]:w-[80%]">
            <motion.h6
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-normal text-lg font-manrope text-white"
            >
              I am always looking to add more skills. Morbi egestas neque eu
              blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
              purus faucibus tristique ut et dolor.
            </motion.h6>

            {/* Staggered List of Skills */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex mt-4 flex-wrap gap-3 max-[820px]:justify-center"
            >
              {list_skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={item} // Applies the child animation
                  whileHover={{ scale: 1.05, borderColor: "#d3e97a", color: "#d3e97a" }} // Added hover effect
                  className="cursor-default rounded-[100px] max-w-[124px] max-h-[56px] w-full h-full flex items-center justify-center p-3 border-solid border-[#484848] border-2 text-base text-white font-bold font-manrope max-[350px]:w-[100px]"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- EXPERIENCE SECTION --- */}
        <div className="flex justify-between mt-14 max-[820px]:flex-col max-[820px]:items-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-normal text-7xl text-white font-BebasNeue max-[820px]:mb-5 max-[820px]:text-6xl"
          >
            My Experience
          </motion.h2>

          <motion.div
            className="w-[50%] max-[820px]:w-[80%]"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Experience Block 1 */}
            <motion.div variants={fadeUp} className="">
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
                Kwork. Completed 20+ different project. Then I have worked in Upwork to 2025 years.
              </p>
            </motion.div>

            {/* Experience Block 2 */}
            <motion.div variants={fadeUp} className="mt-5">
              <div className="w-full flex justify-between mb-3">
                <span className="text-2xl font-medium text-white font-manrope">
                  Technical support specialist
                </span>
                <span className="font-manrope font-normal text-lg font-[#c7c7c7]">
                  January 2025 - August 2025
                </span>
              </div>
              <p className="font-manrope font-normal text-lg font-[#c7c7c7]">
                I have been working as a Technical Support Specialist at UniTalk,
                Kyiv (Telecommunications, Communication) since January 2025,
                focusing on testing, technical support, service monitoring,
                integrations, and troubleshooting.
              </p>
            </motion.div>

            {/* Experience Block 3 */}
            <motion.div variants={fadeUp} className="mt-5">
              <div className="w-full flex justify-between mb-3">
                <span className="text-2xl font-medium text-white font-manrope">
                  Front-end/Mobile developer
                </span>
                <span className="font-manrope font-normal text-lg font-[#c7c7c7]">
                  August 2025 - January 2026
                </span>
              </div>
              <p className="font-manrope font-normal text-lg font-[#c7c7c7]">
                On this postion I worked on projects in React Native and React for learn Japanese. I have integrated Deepgram into an application for learning Japanese. This has improved speech-to-text accuracy to 99%.
                I have developed unique animations for card-based associations, which help users remember words and characters more effectively.
                I have also improved the app’s adaptability, allowing it to run smoothly even on low-end devices.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* --- CONTACT SECTION --- */}
        <div className="mt-20 pb-3 flex justify-between max-[945px]:flex-col max-[945px]:w-[80%] max-[945px]:mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className=""
          >
            <motion.h3 variants={fadeUp} className="font-BebasNeue font-normal text-7xl text-white uppercase max-[945px]:text-5xl">
              Let’s connect
            </motion.h3>

            <motion.p variants={fadeUp} className="font-manrope font-thin text-lg text-white mt-5 max-[380px]:text-sm">
              Say hello at{" "}
              <a
                href="mailto:kosenkodmytro24@gmail.com"
                className="border-b border-[#d3e97a] border-solid hover:text-[#d3e97a] transition-colors"
              >
                kosenkodmytro24@gmail.com
              </a>
            </motion.p>

            <motion.div variants={stagger} className="flex gap-5 mt-5 h-[70%]">
              <motion.div variants={scaleUp}><SmallLinked /></motion.div>
              <motion.div variants={scaleUp}><SamllGitHub /></motion.div>
              <motion.div variants={scaleUp}><Telegram /></motion.div>
            </motion.div>

            <motion.span variants={fadeUp} className="font-manrope font-medium text-lg text-white tracking-widest max-[945px]:hidden block mt-auto">
              @{new Date().getFullYear()} Dmytro Kosenko
            </motion.span>
          </motion.div>

          {/* Form Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <FormGmail />
          </motion.div>

          <span className="font-manrope font-medium text-lg text-white tracking-widest hidden max-[945px]:block mt-10">
            @{new Date().getFullYear()} Dmytro Kosenko
          </span>
        </div>
      </div>
    </main>
  );
};

export default page;
