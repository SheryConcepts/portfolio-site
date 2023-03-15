"use client";

import Image from "next/image";
import typescript from "../../public/typescript.svg";
import javascript from "../../public/javascript.svg";
import html from "../../public/html.svg";
import css from "../../public/css.svg";
import nextjs from "../../public/nextjs.svg";
import react from "../../public/react.svg";
import tailwind from "../../public/tailwind.svg";
import nextauth from "../../public/nextauth.svg";
import prisma from "../../public/prisma.svg";
import trpc from "../../public/trpc.svg";
import reactQuery from "../../public/react-query.svg";
import rust from "../../public/rust.svg";
import figma from "../../public/figma.svg";
import vscode from "../../public/vscode.svg";
import { motion } from "framer-motion";

export default function Skill() {
  return (
    <div className="min-h-screen w-full bg-p-10 pb-10">
      <div className="mx-auto max-w-screen-lg px-4 pt-20 pb-10 md:px-8  lg:px-12 xl:px-16">
        <h2 className="text-md font-roboto-mono text-p-6 sm:text-2xl md:text-3xl">
          I love learning new tech,
          <br />
          currently I am working with,
          <br /> following technologies:
        </h2>
        <div className="w-sm mx-auto mt-8 flex flex-wrap justify-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Image src={typescript} alt="typescript logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Image src={rust} alt="rust logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <Image src={javascript} alt="javascript logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <Image src={html} alt="html logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <Image src={css} alt="css logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <Image src={nextjs} alt="nextjs logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            <Image src={react} alt="react logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
          >
            <Image src={tailwind} alt="tailwind logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2.6 }}
          >
            <Image src={nextauth} alt="nextauth logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
          >
            <Image src={trpc} alt="trpc logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <Image src={prisma} alt="prisma logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3.2 }}
          >
            <Image src={reactQuery} alt="react query logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3.4 }}
          >
            <Image src={figma} alt="figma logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3.6 }}
          >
            <Image src={vscode} alt="vscode logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3.8 }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}
