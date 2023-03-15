"use client";

import { delay, motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  return (
    <div id="projects" className="min-h-screen w-full bg-[#735C99] pb-10">
      <div className="mx-auto max-w-screen-lg px-4 pt-12 sm:px-8 md:px-12">
        <h3 className="text-md m mb-8 font-semibold text-p-13 sm:text-lg md:text-xl">
          Projects I have worked on:
        </h3>
        <ProjectCard
          title={"Panaverse"}
          description={
            "Panaverse is the community based learning platform. It offers best tech education in Pakistan. This project is the frontend implementation of Panavrse site in Nextjs, ChakraUI and was designed using Figma."
          }
          id="panaverse"
        />
        <ProjectCard
          title={"Todo App"}
          description={
            "This Project is a simple Todo App implement using tailwindcss, typescript, nextjs and on the backed firebase's firestore was used."
          }
          id="todo"
        />
        <ProjectCard
          title={"Pricing UI"}
          description={
            "Pricing UI is an Implementation of a UI in figma in ChakraUI, Typescript and Nextjs. It was implemented in the class of ChakraUIForBeginners."
          }
          id="pricingui"
        />
        <ProjectCard
          title="Portfolio"
          description={
            "This Portfolio website is made using typescipt, javascript, nextjs, react, tailwindcss. Aside from that I also used framer motion to add scroll based animations."
          }
          id="portfolio"
        />
        <ProjectCard
          title={"Panaverse fullstack"}
          description={
            "This Project Involves Design and Implementation of Panaverse site. First Panaverse site is implemented in Figma and then coded using Typescript, Nextjs and tailwindcss. Auth is handled by NextAuth and backend typesafe api is implemented in TRPC and database in Prisma."
          }
          more={"work in progress"}
        />
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  more,
  id,
}: {
  title: string;
  description: string;
  more?: string;
  id?: string;
}) {
  console.log(id);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-8 flex max-w-screen-md flex-col items-start justify-center rounded-md border-2 border-s-3 py-8 pl-8 pr-8"
    >
      <h2 className="mb-4 text-2xl text-p-5 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      <p className="mb-4 text-lg text-[#CCC5D8] sm:text-xl">{description}</p>
      <Link href={id === undefined ? "" : `/project/${id}`}>
        {more ? (
          <p className="text-p mb-4 text-s-9 underline">{more}</p>
        ) : (
          <p className="text-p mb-4 text-s-4 underline">read more</p>
        )}
      </Link>
    </motion.div>
  );
}
