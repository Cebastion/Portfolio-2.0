"use client";
import { ChangeEvent, FC, useState } from "react";
import Image from "next/image";
import { IMailer } from "@/interfaces/Mailer.interface";
import { MailerService } from "@/services/Mailer.service";

const page: FC = () => {
  const [Form, SetForm] = useState<IMailer>({ name: '', email: '', subject: '', message: '' })
  const list_skills = [
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "TypeScript",
    "C#",
    "C++",
    "React",
    "Next.js",
    "NodeJS",
    "Express.js",
    "Nest.js",
    "TailwindCSS",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
  ];
  const ScrollToGmailForm = () => {
    document
      .getElementById("gmail-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    SetForm((prevForm) => ({ ...prevForm, [name]: value }))
  }

  const SendEmail = () => {
    MailerService.SendEmail(Form)
    SetForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <main>
      <div className="max-w-[1280px] mx-auto px-3">
        <div className="flex justify-between mt-20 max-[945px]:justify-center max-[945px]:flex-col max-[945px]:items-center">
          <h2 className="font-BebasNeue font-normal text-[101px] text-white text-left max-[945px]:text-7xl max-[945px]:mb-5">
            ABOUT ME
          </h2>
          <div className="max-w-[50%] max-[945px]:max-w-[80%]">
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
              <button
                className="h-14 w-52 rounded-3xl bg-button-custom-lime rounded-100px flex justify-around items-center"
                onClick={ScrollToGmailForm}
              >
                <span className="font-manrope font-bold text-base uppercase text-black">
                  Contact me
                </span>
                <div className="rounded-full w-3 h-3 bg-black"></div>
              </button>
              <div
                className="w-14 h-14 rounded-full bg-bg-custom-gray flex items-center justify-center cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/dmytro-kosenko-49b4ab27b/",
                    "_blank",
                  )
                }
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.39825 7.79682C6.70735 7.79682 7.76858 6.73558 7.76858 5.42649C7.76858 4.11739 6.70735 3.05615 5.39825 3.05615C4.08915 3.05615 3.02792 4.11739 3.02792 5.42649C3.02792 6.73558 4.08915 7.79682 5.39825 7.79682Z"
                    fill="#D3E97A"
                  />
                  <path
                    d="M10.0068 9.59282V22.7434H14.0898V16.2402C14.0898 14.5242 14.4127 12.8623 16.5403 12.8623C18.6388 12.8623 18.6648 14.8242 18.6648 16.3485V22.7445H22.75V15.5327C22.75 11.9902 21.9873 9.26782 17.8468 9.26782C15.8589 9.26782 14.5264 10.3587 13.9815 11.3912H13.9263V9.59282H10.0068ZM3.35292 9.59282H7.4425V22.7434H3.35292V9.59282Z"
                    fill="#D3E97A"
                  />
                </svg>
              </div>
              <div
                className="w-14 h-14 rounded-full bg-bg-custom-gray flex items-center justify-center cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/Cebastion", "_blank")
                }
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.0282 2.16675C7.06008 2.16675 2.223 7.00383 2.223 12.9719C2.223 17.7451 5.31808 21.7957 9.61242 23.2257C10.153 23.3232 10.348 22.9906 10.348 22.7046C10.348 22.4478 10.3393 21.7675 10.3361 20.8673C7.32983 21.5194 6.695 19.4178 6.695 19.4178C6.20533 18.1698 5.49575 17.8372 5.49575 17.8372C4.51533 17.1666 5.5705 17.1818 5.5705 17.1818C6.656 17.2576 7.22475 18.2954 7.22475 18.2954C8.18892 19.9464 9.75542 19.4698 10.3686 19.1935C10.4672 18.4948 10.7488 18.0181 11.0565 17.7483C8.658 17.4764 6.136 16.5491 6.136 12.4075C6.136 11.2299 6.55742 10.2636 7.24533 9.50958C7.13592 9.2355 6.76217 8.13592 7.35258 6.64958C7.35258 6.64958 8.25933 6.35817 10.3231 7.75567C11.2045 7.51589 12.1137 7.3935 13.0271 7.39167C13.9405 7.39315 14.8498 7.51554 15.7311 7.75567C17.7959 6.35708 18.7016 6.64958 18.7016 6.64958C19.292 8.13592 18.9215 9.2355 18.8088 9.50958C19.5022 10.2636 19.9182 11.2288 19.9182 12.4075C19.9182 16.5599 17.394 17.4721 14.9868 17.7397C15.3714 18.0733 15.7181 18.732 15.7181 19.7395C15.7181 21.1847 15.7051 22.3503 15.7051 22.7046C15.7051 22.9938 15.8979 23.3297 16.4493 23.2235C20.7415 21.7913 23.8333 17.744 23.8333 12.9719C23.8333 7.00383 18.9963 2.16675 13.0282 2.16675Z"
                    fill="#D3E97A"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-5 justify-center">
          <Image
            width={1224}
            height={700}
            src={"/image/photo3.jpg"}
            alt=""
            className="rounded-lg max-w-full max-h-full h-[600px] w-[400px] max-[420px]:w-[320px]"
          />
          <Image
            width={1224}
            height={700}
            src={"/image/photo4.jpg"}
            alt=""
            className="rounded-lg max-w-full max-h-full h-[600px] w-[400px] max-[845px]:hidden"
          />
          <Image
            width={1224}
            height={700}
            src={"/image/photo5.jpg"}
            alt=""
            className="rounded-lg max-w-full max-h-full h-[600px] w-[400px] max-[1350px]:hidden"
          />{" "}
        </div>{" "}
        <div className="flex justify-between mt-14 max-[820px]:flex-col max-[820px]:items-center">
          {" "}
          <h2 className="font-normal text-7xl text-white font-BebasNeue max-[820px]:mb-5 max-[820px]:text-6xl">
            {" "}
            My Capabilities{" "}
          </h2>{" "}
          <div className="w-[50%] max-[820px]:w-[80%]">
            {" "}
            <h6 className="font-normal text-lg font-manrope text-white">
              {" "}
              I am always looking to add more skills.Morbi egestas neque eu
              blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
              purus faucibus tristique ut et dolor.{" "}
            </h6>{" "}
            <div className="flex mt-4 flex-wrap gap-3 max-[820px]:justify-center">
              {" "}
              {list_skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-[100px] max-w-[124px] max-h-[56px] w-full h-full flex items-center justify-center p-3 border-solid border-[#484848] border-2 text-base text-white font-bold font-manrope max-[350px]:w-[100px]"
                >
                  {" "}
                  {skill}{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="flex justify-between mt-14 max-[820px]:flex-col max-[820px]:items-center">
          <h2 className="font-normal text-7xl text-white font-BebasNeue max-[820px]:mb-5 max-[820px]:text-6xl">
            My Experience
          </h2>
          <div className="w-[50%] max-[820px]:w-[80%]">
            <div className="w-full flex justify-between mb-3">
              <span className="text-2xl font-medium text-white font-manrope">
                Freelance Developer
              </span>
              <span className="font-manrope font-normal text-lg font-[#c7c7c7]">
                Jun 2022 - Present
              </span>
            </div>
            <p className="font-manrope font-normal text-lg font-[#c7c7c7]">
              From 2022 to present I working by freelance. Started career in
              Kwork. Completed 15+ different project. Now, I'm planning to
              continue myself career in Upwork or Peoeple Per Hour.
            </p>
          </div>
        </div>
        <div className="mt-20 pb-3 flex justify-between max-[945px]:flex-col max-[945px]:w-[80%] max-[945px]:mx-auto">
          {" "}
          <div className="">
            {" "}
            <h3 className="font-BebasNeue font-normal text-7xl text-white uppercase max-[945px]:text-5xl">
              {" "}
              Let’s connect{" "}
            </h3>{" "}
            <p className="font-manrope font-thin text-lg text-white mt-5 max-[380px]:text-sm">
              {" "}
              Say hello at{" "}
              <a
                href="mailto:cebastion1488@gmail.com"
                className="border-b border-[#d3e97a] border-solid"
              >
                {" "}
                cebastion1488@gmail.com{" "}
              </a>{" "}
            </p>{" "}
            <div className="flex gap-5 mt-5 h-[70%]">
              {" "}
              <div
                className="cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/dmytro-kosenko-49b4ab27b/",
                    "_blank",
                  )
                }
              >
                {" "}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    d="M6.644 9.59602C8.2552 9.59602 9.56134 8.28988 9.56134 6.67869C9.56134 5.06749 8.2552 3.76135 6.644 3.76135C5.0328 3.76135 3.72667 5.06749 3.72667 6.67869C3.72667 8.28988 5.0328 9.59602 6.644 9.59602Z"
                    fill="#D3E97A"
                  />{" "}
                  <path
                    d="M12.316 11.8067V27.992H17.3413V19.988C17.3413 17.876 17.7387 15.8307 20.3573 15.8307C22.94 15.8307 22.972 18.2453 22.972 20.1213V27.9933H28V19.1173C28 14.7573 27.0613 11.4067 21.9653 11.4067C19.5187 11.4067 17.8787 12.7493 17.208 14.02H17.14V11.8067H12.316ZM4.12666 11.8067H9.16V27.992H4.12666V11.8067Z"
                    fill="#D3E97A"
                  />{" "}
                </svg>{" "}
              </div>{" "}
              <div
                className="cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/Cebastion", "_blank")
                }
              >
                {" "}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.0347 2.66669C8.68933 2.66669 2.73599 8.62002 2.73599 15.9654C2.73599 21.84 6.54533 26.8254 11.8307 28.5854C12.496 28.7054 12.736 28.296 12.736 27.944C12.736 27.628 12.7253 26.7907 12.7213 25.6827C9.02133 26.4854 8.23999 23.8987 8.23999 23.8987C7.63733 22.3627 6.76399 21.9534 6.76399 21.9534C5.55733 21.128 6.85599 21.1467 6.85599 21.1467C8.19199 21.24 8.89199 22.5174 8.89199 22.5174C10.0787 24.5494 12.0067 23.9627 12.7613 23.6227C12.8827 22.7627 13.2293 22.176 13.608 21.844C10.656 21.5094 7.55199 20.368 7.55199 15.2707C7.55199 13.8214 8.07066 12.632 8.91733 11.704C8.78266 11.3667 8.32266 10.0134 9.04933 8.18402C9.04933 8.18402 10.1653 7.82535 12.7053 9.54535C13.7901 9.25025 14.9091 9.09961 16.0333 9.09735C17.1576 9.09918 18.2766 9.24982 19.3613 9.54535C21.9027 7.82402 23.0173 8.18402 23.0173 8.18402C23.744 10.0134 23.288 11.3667 23.1493 11.704C24.0027 12.632 24.5147 13.82 24.5147 15.2707C24.5147 20.3814 21.408 21.504 18.4453 21.8334C18.9187 22.244 19.3453 23.0547 19.3453 24.2947C19.3453 26.0734 19.3293 27.508 19.3293 27.944C19.3293 28.3 19.5667 28.7134 20.2453 28.5827C25.528 26.82 29.3333 21.8387 29.3333 15.9654C29.3333 8.62002 23.38 2.66669 16.0347 2.66669Z"
                    fill="#D3E97A"
                  />{" "}
                </svg>{" "}
              </div>{" "}
              <div
                className="cursor-pointer"
                onClick={() =>
                  window.open("https://t.me/DmytroKosenko", "_blank")
                }
              >
                {" "}
                <svg
                  fill="#D3E97A"
                  width="32px"
                  height="32px"
                  viewBox="-2 -2 24.00 24.00"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#D3E97A"
                  stroke-width="0.0002"
                  transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                >
                  {" "}
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>{" "}
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.28"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M14.4415206,6 C14.060553,6.00676048 13.476055,6.20741135 10.663148,7.36249773 C9.67796175,7.7670526 7.70897661,8.60437935 4.75619264,9.87447795 C4.27670659,10.0627254 4.02553067,10.2468857 4.00266485,10.4269588 C3.95876487,10.7726802 4.46291296,10.8803081 5.09723696,11.0838761 C5.61440201,11.2498453 6.31007997,11.4440124 6.67173438,11.4517262 C6.99978943,11.4587234 7.36593635,11.3251987 7.77017511,11.051152 C10.5290529,9.21254679 11.9531977,8.28322679 12.0426094,8.26319203 C12.1056879,8.24905787 12.1930992,8.23128593 12.2523244,8.28325656 C12.3115496,8.33522719 12.3057275,8.43364956 12.299454,8.46005377 C12.2492926,8.67117474 9.65764825,10.998457 9.50849738,11.1513987 L9.43697409,11.2233057 C8.88741493,11.7661123 8.33196049,12.1205055 9.290333,12.7440164 C10.155665,13.3069957 10.6592923,13.6661378 11.5507686,14.2430701 C12.1204738,14.6117635 12.5671299,15.0489784 13.1553348,14.9955401 C13.4259939,14.9709508 13.705567,14.7196888 13.8475521,13.9703127 C14.1831052,12.1993135 14.8426779,8.36209709 14.9951103,6.78087197 C15.0084653,6.64233621 14.9916649,6.46503787 14.9781732,6.38720805 C14.9646815,6.30937823 14.9364876,6.19848702 14.8340164,6.11639754 C14.7126597,6.01917896 14.5253109,5.99867765 14.4415206,6 Z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <span className="font-manrope font-medium text-lg text-white tracking-widest max-[945px]:hidden">
              @{new Date().getFullYear()} Dmytro Kosenko
            </span>
          </div>
          <form
            onSubmit={SendEmail}
            id="gmail-form"
            className="flex flex-col gap-6 items-start max-[945px]:mt-5"
          >
            <div className="flex flex-col gap-1 max-[700px]:w-full">
              <label
                htmlFor="Name"
                className="font-manrope font-medium text-base text-white"
              >
                Name
              </label>
              <input
                value={Form.name} onChange={handleInputChange}
                name="Name"
                type="text"
                className="px-4 py-3 w-[600px] h-14 bg-[#1a1a1a] font-manrope font-normal text-base text-white max-[700px]:w-full"
                required
              />
            </div>
            <div className="flex flex-col gap-1 max-[700px]:w-full">
              <label
                htmlFor="Email"
                className="font-manrope font-medium text-base text-white"
              >
                Email
              </label>
              <input
                value={Form.email} onChange={handleInputChange}
                name="Email"
                type="email"
                className="px-4 py-3 w-[600px] h-14 bg-[#1a1a1a] font-manrope font-normal text-base text-white max-[700px]:w-full"
                required
              />
            </div>
            <div className="flex flex-col gap-1 max-[700px]:w-full">
              <label
                htmlFor="Subject"
                className="font-manrope font-medium text-base text-white"
              >
                Subject
              </label>
              <input
                value={Form.subject} onChange={handleInputChange}
                name="Subject"
                type="text"
                className="px-4 py-3 w-[600px] h-14 bg-[#1a1a1a] font-manrope font-normal text-base text-white max-[700px]:w-full"
                required
              />
            </div>
            <div className="flex flex-col gap-1 max-[700px]:w-full">
              <label
                htmlFor="Message"
                className="font-manrope font-medium text-base text-white"
              >
                Message
              </label>
              <textarea
                value={Form.message} onChange={handleInputChange}
                name="Message"
                className="px-4 py-3 w-[600px] h-40 bg-[#1a1a1a] font-manrope font-normal text-base text-white resize-none max-[700px]:w-full"
                required
              />
            </div>
            <button className="w-36 h-14 rounded-[100px] bg-button-custom-lime font-manrope font-bold text-base uppercase text-black">
              Submit
            </button>
          </form>
          <span className="font-manrope font-medium text-lg text-white tracking-widest hidden max-[945px]:block mt-10">
            @{new Date().getFullYear()} Dmytro Kosenko
          </span>
        </div>
      </div>
    </main>
  );
};

export default page;
