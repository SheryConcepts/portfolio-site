import Image from "next/image";
import Link from "next/link";
import javascript from "../../../public/javascript.svg";
import typescript from "../../../public/typescript.svg";
import html from "../../../public/html.svg";
import css from "../../../public/css.svg";
import nextjs from "../../../public/nextjs.svg";
import react from "../../../public/react.svg";
import tailwindcss from "../../../public/tailwind.svg";
import nextauth from "../../../public/nextauth.svg";
import prisma from "../../../public/prisma.svg";
import trpc from "../../../public/trpc.svg";
import reactQuery from "../../../public/react-query.svg";

type Data = {
  [x: string]: {
    title: string;
    description: string;
    techList: { import: any; name: string }[];
    link: string;
  };
};

const Data: Data = {
  panaverse: {
    title: "Panaverse",
    description:
      "Panaverse is the community based learning platform. It offers best tech education in Pakistan. This project is the frontend implementation of Panavrse site in Nextjs, ChakraUI and was designed using Figma.",
    link: "http://panaverse-five.vercel.app",
    techList: [
      { import: javascript, name: "javascript" },
      { import: typescript, name: "typescript" },
      { import: react, name: "react" },
      { import: nextjs, name: "nextjs" },
      { import: html, name: "html" },
      { import: css, name: "css" },
      { import: tailwindcss, name: "tailwindcss" },
    ],
  },
  portfolio: {
    title: "Portfolio",
    description:
      "This Portfolio website is made using typescipt, javascript, nextjs, react, tailwindcss. Aside from that I also used framer motion to add scroll based animations",
    link: "https://portfolio-site-sheryconcepts.vercel.app/",
    techList: [
      { import: javascript, name: "javascript" },
      { import: typescript, name: "typescript" },
      { import: react, name: "react" },
      { import: nextjs, name: "nextjs" },
      { import: html, name: "html" },
      { import: css, name: "css" },
      { import: tailwindcss, name: "tailwindcss" },
    ],
  },
  pricingui: {
    title: "Pricing UI",
    description:
      "Pricing UI is an Implementation of a UI in figma in ChakraUI, Typescript and Nextjs. It was implemented in the class of ChakraUIForBeginners.",
    link: "https://pricing-chakra-alpha.vercel.app/",
    techList: [
      { import: javascript, name: "javascript" },
      { import: typescript, name: "typescript" },
      { import: react, name: "react" },
      { import: nextjs, name: "nextjs" },
      { import: html, name: "html" },
      { import: css, name: "css" },
      { import: tailwindcss, name: "tailwindcss" },
    ],
  },
  todo: {
    title: "Todo App",
    description:
      "This Project is a simple Todo App implement using tailwindcss, typescript, nextjs and on the backed firebase's firestore was used",
    link: "https://todo-tailwind-sheryconcepts.vercel.app/",
    techList: [
      { import: javascript, name: "javascript" },
      { import: typescript, name: "typescript" },
      { import: react, name: "react" },
      { import: nextjs, name: "nextjs" },
      { import: html, name: "html" },
      { import: css, name: "css" },
      { import: tailwindcss, name: "tailwindcss" },
    ],
  },
};
export default function Page({
  params: { projectId },
}: {
  params: { projectId: string };
}) {
  return (
    <div className="max-w-screen-3xl flex min-h-screen flex-col items-center justify-start gap-8 rounded-t-3xl bg-p-12 px-4 pt-16 sm:px-8 md:px-12">
      {projectId === "panaverse" ? (
        <Project
          title={Data.panaverse.title}
          description={Data.panaverse.description}
          link={Data.panaverse.link}
          techList={Data.panaverse.techList}
        />
      ) : projectId === "portfolio" ? (
        <Project
          title={Data.portfolio.title}
          description={Data.portfolio.description}
          link={Data.portfolio.link}
          techList={Data.portfolio.techList}
        />
      ) : projectId === "todo" ? (
        <Project
          title={Data.todo.title}
          description={Data.todo.description}
          link={Data.todo.link}
          techList={Data.todo.techList}
        />
      ) : projectId === "pricingui" ? (
        <Project
          title={Data.pricingui.title}
          description={Data.pricingui.description}
          link={Data.pricingui.link}
          techList={Data.pricingui.techList}
        />
      ) : (
        <h1 className="text-h1 mx-auto max-w-md text-p-2">
          404 page not found (T-T)
        </h1>
      )}
    </div>
  );
}

function Project({
  title,
  description,
  techList,
  link,
}: {
  title: string;
  description: string;
  techList: { import: any; name: string }[];
  link: string;
}) {
  return (
    <>
      <h1 className="mx-auto max-w-md text-3xl text-p-2  md:text-4xl">
        {title}
      </h1>
      <p className="text-center text-s-4 hover:text-s-8">
        <Link href={link} target="_blank">
          {link}
        </Link>
      </p>
      <div className="text-center">
        <p className="mb-4 max-w-xl">{description}</p>
      </div>
      <div className="mx-auto mt-4 flex w-full max-w-lg flex-wrap justify-between gap-y-8 p-4">
        {techList.map((i) => (
          <Image src={i.import} alt={i.name} key={i.name} />
        ))}
      </div>
    </>
  );
}
