"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";

const ContactMeBlock = () => {
  const ScrollToGmailForm = useCallback(() => {
    document
      .getElementById("gmail-form")
      ?.scrollIntoView({ behavior: "smooth" });
  }, [])
  return (
    <motion.button
      className="h-14 w-52 rounded-3xl bg-button-custom-lime flex justify-around items-center"
      onClick={ScrollToGmailForm}
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(211, 233, 122, 0.6)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <span className="font-manrope font-bold text-base uppercase text-black">
        Contact me
      </span>
    </motion.button>
  );
};

export default ContactMeBlock;

