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

export default function Skill() {
  return (
    <div className="h-screen w-full bg-p-10">
      <div className="mx-auto max-w-screen-lg px-10 pt-16 pb-40">
        <h2 className="font-roboto-mono text-h3 text-p-6">
          I love learning new tech,
          <br />
          currently I am working with,
          <br /> following technologies:
        </h2>
        <div className="mt-8 flex w-full justify-center">
          <Image src={typescript} alt="typescript logo" />
        </div>
        <div className="mt-4 flex w-full justify-center space-x-4">
          <Image src={javascript} alt="javascript logo" />
          <Image src={html} alt="html logo" />
          <Image src={css} alt="css logo" />
        </div>
        <div className="mt-4 flex w-full justify-center space-x-4">
          <Image src={nextjs} alt="nextjs logo" />
          <Image src={react} alt="react logo" />
          <Image src={tailwind} alt="tailwind logo" />
        </div>
        <div className="mt-4 flex w-full justify-center space-x-4">
          <Image src={nextauth} alt="nextauth logo" />
          <Image src={trpc} alt="trpc logo" />
          <Image src={prisma} alt="prisma logo" />
          <Image src={reactQuery} alt="react query logo" />
        </div>
        <h2 className="mt-16 font-roboto-mono text-p text-p-6">
          Stuff I am currently learning:
        </h2>
        <div className="mt-4 flex w-full justify-center space-x-4">
          <Image src={rust} alt="rust logo" />
        </div>
        <h2 className="mt-16 font-roboto-mono text-p text-p-6">Tools I use:</h2>
        <div className="mt-4 flex w-full justify-center space-x-4">
          <Image src={figma} alt="figma logo" />
          <Image src={vscode} alt="vscode logo" />
        </div>
      </div>
    </div>
  );
}
