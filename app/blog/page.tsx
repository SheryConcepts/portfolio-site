import Link from "next/link";

export default function Page({
  params: { projectId },
}: {
  params: { projectId: string };
}) {
  function formatString(s: string): string {
    return s.toLowerCase().replace(/\s+/g, "-");
  }

  return (
    <div className="max-w-screen-3xl flex min-h-screen flex-col items-center justify-start gap-y-16 rounded-t-3xl bg-p-12 px-4 pt-16 sm:px-8 md:px-12">
      <Post
        title="Title of the post"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quae repellat unde vitae ea recusandae illo perspiciatis sequi quidem adipisci cumque ipsam ratione, sunt modi aliquid facilis laborum atque quia."
        id={formatString("Title of the project")}
      />
      <Post
        title="Title of the post"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quae repellat unde vitae ea recusandae illo perspiciatis sequi quidem adipisci cumque ipsam ratione, sunt modi aliquid facilis laborum atque quia."
        id={formatString("Title of the project")}
      />
      <Post
        title="Title of the post"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quae repellat unde vitae ea recusandae illo perspiciatis sequi quidem adipisci cumque ipsam ratione, sunt modi aliquid facilis laborum atque quia."
        id={formatString("Title of the project")}
      />
    </div>
  );
}

function Post({
  id,
  title,
  description,
}: {
  title: string;
  id: string;
  description: string;
}) {
  console.log(id);
  return (
    <Link href={`/blog/${id}`}>
      <div className=" flex max-w-screen-lg flex-col gap-y-4 rounded-lg bg-p-13 p-8 px-8 sm:px-12 md:px-16 lg:px-20 ">
        <h1 className="text-xl text-p-3 sm:text-2xl lg:text-3xl">{title}</h1>
        <p className="text-lg text-p-8 md:text-xl">{description}</p>
        <p className="text-lg text-s-5 underline md:text-xl">read more</p>
      </div>
    </Link>
  );
}
