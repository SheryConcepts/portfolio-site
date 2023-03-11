import Image from "next/image";
import Link from "next/link";
import javascript from "../../../public/javascript.svg";

export default function Page({
  params: { projectId },
}: {
  params: { projectId: string };
}) {
  return (
    <div className="max-w-screen-3xl flex min-h-screen flex-col items-center justify-start gap-8 rounded-t-3xl bg-p-12 px-20 pt-16">
      <h1 className="mx-auto max-w-md text-h1 text-p-2">Panaverse</h1>
      <p className="text-s-4 hover:text-s-8">
        <Link href={"http://panaverse-five.vercel.app"} target="_blank">
          http://panaverse-five.vercel.app
        </Link>
      </p>
      <div>
        <p className="mb-4 max-w-lg">
          This Project is a simple Todo App implement using tailwindcss,
          typescript, nextjs and on the backed firebase firestore was used.
        </p>
        <p className="mb-4 max-w-lg">
          This Project is a simple Todo App implement using tailwindcss,
          typescript, nextjs and on the backed firebase firestore was used.
        </p>
        <p className="mb-4 max-w-lg">
          This Project is a simple Todo App implement using tailwindcss,
          typescript, nextjs and on the backed firebase firestore was used.
        </p>
      </div>
      <div className="mx-auto mt-4 flex w-full max-w-md flex-wrap-reverse justify-between gap-y-4 p-4">
        <Image src={javascript} alt="javascript logo" />
        <Image src={javascript} alt="javascript logo" />
        <Image src={javascript} alt="javascript logo" />
        <Image src={javascript} alt="javascript logo" />
        <Image src={javascript} alt="javascript logo" />
        <Image src={javascript} alt="javascript logo" />
        <Image src={javascript} alt="javascript logo" />
        <Image src={javascript} alt="javascript logo" />
        <Image src={javascript} alt="javascript logo" />
        <Image src={javascript} alt="javascript logo" />
      </div>
    </div>
  );
}
