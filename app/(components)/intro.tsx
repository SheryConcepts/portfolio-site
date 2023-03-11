import Image from "next/image";
import Email from "./../../public/email.svg";
import Github from "./../../public/github.svg";
import Whatsapp from "./../../public/whatsapp.svg";
import Discord from "./../../public/discord.svg";
import Twitter from "./../../public/twitter.svg";

export default function Section1() {
  return (
    <div className="max-w-screen-3xl h-screen rounded-t-3xl bg-p-10 px-20  pt-16">
      <div className="mx-auto mt-40 max-w-screen-xl">
        <h2 className=" font-roboto-mono text-h2 text-p-13 sm:text-h2  md:text-h1 lg:text-h1 xl:text-h1">
          Welcome,
          <br />I am <span className="text-s-3">Sheharyar </span>and <br />I
          build stuff with code.
        </h2>
        <div className="flex justify-start pt-8">
          <Image
            className="mr-2 w-10"
            // width="38"
            src={Email}
            alt="Email the author"
          />
          <Image
            className="mr-2 w-10"
            width="38"
            src={Github}
            alt="Github of the author"
          />
          <Image
            className="mr-2 w-10"
            width="38"
            src={Whatsapp}
            alt="Whatsapp of the author"
          />
          <Image
            className="mr-2 w-10"
            width="38"
            src={Discord}
            alt="Discord the author"
          />
          <Image
            className="mr-2 w-10"
            width="38"
            src={Twitter}
            alt="Twitter of the author"
          />
        </div>
      </div>
    </div>
  );
}
