"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Bio() {
  return (
    <div className="max-w-screen-3xl min-h-screen bg-p-9  px-8 pt-16 sm:px-14 md:px-20 lg:px-24 xl:px-28">
      <div className="mx-auto mt-16 flex max-w-screen-lg flex-col gap-y-2">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, ease: "easeOut", duration: 2 }}
          className="xl:text- font-roboto-mono text-2xl text-[#CECECF] sm:text-3xl md:text-4xl"
        >
          I am a <span className="text-[#DB94AC]">Software Developer</span>,
          <br />
          building type-safe
          <br />
          <span className="text-[#DB94AC]">Web Apps</span>.
        </motion.h2>
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3, ease: "easeOut", duration: 2 }}
            className="mt-4 font-roboto-mono text-lg text-[#CECECF] sm:text-xl"
          >
            I write about things I find beautiful on my{" "}
            <Link href="/blog">
              <span className="text-[#DB94AC] underline">Blog</span>.
            </Link>
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 6, ease: "easeOut", duration: 2 }}
            className="mt-4 font-roboto-mono text-lg text-[#CECECF] sm:text-xl"
          >
            You can checkout my{" "}
            <Link
              href="#projects"
              onClick={(e) => {
                e.stopPropagation();
                if (window.location.hash) {
                  const element = document.querySelector(window.location.hash);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
            >
              <span className="text-[#DB94AC] underline">Projects</span>.
            </Link>
          </motion.h2>
        </div>
      </div>
    </div>
  );
}
