"use client";

import Link from "next/link";
import { FC, useCallback, useEffect, useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

const Header: FC = () => {
  const [Active, SetActive] = useState(false);

  useEffect(() => {
    if (Active) {
      // Disable scrolling
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Enable scrolling
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [Active]);

  const ToggleMenu = () => {
    SetActive(!Active);
  };

  const ScrollToGmailForm = useCallback(() => {
    SetActive(false);

    const element = document.getElementById("gmail-form");

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.location.href = "/#gmail-form";
    }
  }, [])

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="w-full py-5 px-3">
        <div className="flex max-w-1440 mx-auto items-center max-mobile:justify-between">
          <h1
            onClick={() => (window.location.href = "/")}
            className="text-white font-BebasNeue font-normal text-3xl z-10 cursor-pointer"
          >
            Dmytro Kosenko
          </h1>

          {/* Desktop Menu */}
          <nav className="max-mobile:hidden flex ml-auto gap-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link className="font-inter font-medium text-base text-white" href="/work">
                Work
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link className="font-inter font-medium text-base text-white" href="/about">
                About
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <span
                className="font-inter font-medium text-base text-white cursor-pointer"
                onClick={ScrollToGmailForm}
              >
                Contact
              </span>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div
            className="mobile:hidden cursor-pointer flex p-4 focus:outline-none gap-2 flex-col relative z-10"
            onClick={ToggleMenu}
          >
            <motion.div
              className="w-10 h-0.5 bg-white mb-1 rounded-md"
              animate={Active ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-10 h-0.5 bg-white mb-1 rounded-md"
              animate={Active ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {Active && (
            <motion.nav
              className="absolute top-0 left-0 h-full w-full bg-black flex flex-col items-center justify-center gap-10 z-5"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
            >
              <motion.div variants={linkVariants}>
                <Link onClick={() => SetActive(false)} className="font-inter font-medium text-base text-white" href="/work">
                  Work
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link onClick={() => SetActive(false)} className="font-inter font-medium text-base text-white" href="/about">
                  About
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <span
                  className="font-inter font-medium text-base text-white cursor-pointer"
                  onClick={ScrollToGmailForm}
                >
                  Contact
                </span>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;

