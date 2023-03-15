"use client";

import Link from "next/link";
import Image from "next/image";
import Email from "./../../public/email.svg";
import Github from "./../../public/github.svg";
import Whatsapp from "./../../public/whatsapp.svg";
import Discord from "./../../public/discord.svg";
import Twitter from "./../../public/twitter.svg";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Section1() {
  return (
    <div className="max-w-screen-3xl min-h-screen rounded-t-3xl bg-p-10 px-8 pt-10 pb-8 sm:px-14 md:px-20 md:pt-16 lg:px-24  xl:px-28">
      <div className="md:mt-30 mx-auto mt-20 max-w-screen-xl sm:mt-20 lg:mt-40 xl:mt-40">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, ease: "easeOut", duration: 3 }}
          className="font-roboto-mono text-2xl leading-relaxed text-p-13 sm:text-5xl lg:text-6xl"
        >
          Welcome,
          <br />I am <span className="text-s-3">Sheharyar </span>and <br />I
          build stuff with code.
        </motion.h1>
        <div className="flex flex-wrap justify-start gap-x-2 gap-y-2 pt-8">
          <Link href="mailto:chsheharyarahmed@gmail.com">
            <motion.div
              initial={{ x: -3000 }}
              animate={{ x: 0 }}
              transition={{ ease: "linear" }}
            >
              <Image src={Email} alt="Email the author" />
            </motion.div>
          </Link>
          <Link href="http://github.com/SheryConcepts">
            <motion.div
              initial={{ x: -3000 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3, ease: "linear" }}
            >
              <Image width="38" src={Github} alt="Github of the author" />
            </motion.div>
          </Link>
          <Link href="https://wa.me/923138771482">
            <motion.div
              initial={{ x: -3000 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.6, ease: "linear" }}
            >
              <Image width="38" src={Whatsapp} alt="Whatsapp of the author" />
            </motion.div>
          </Link>
          <Link href="https://discordapp.com/users/625267357475930112">
            <motion.div
              initial={{ x: -3000 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.9, ease: "linear" }}
            >
              <Image width="38" src={Discord} alt="Discord of the author" />
            </motion.div>
          </Link>
          <Link href="https://twitter.com/Shery_Karori">
            <motion.div
              transition={{ delay: 1.2, ease: "linear" }}
              initial={{ x: -3000 }}
              animate={{ x: 0 }}
            >
              <Image width="38" src={Twitter} alt="Twitter of the author" />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
