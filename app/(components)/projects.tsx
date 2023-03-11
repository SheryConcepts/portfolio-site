export default function Projects() {
  return (
    <div className="min-h-screen w-full bg-[#735C99] pb-10">
      <div className="mx-auto max-w-screen-lg px-10 pt-12">
        <h3 className="mb-16 text-h2 font-semibold text-p-13">
          Projects I have worked on:
        </h3>
        <ProjectCard
          title={"Panaverse"}
          description={
            "Panaverse is the community based learning platform. It offers best tech education in Pakistan. This project is the frontend implementation of Panavrse site in Nextjs, ChakraUI and was designed using Figma."
          }
        />
        <ProjectCard
          title={"Todo App"}
          description={
            "This Project is a simple Todo App implement using tailwindcss, typescript, nextjs and on the backed firebase's firestore was used."
          }
        />
        <ProjectCard
          title={"Pricing UI"}
          description={
            "Pricing UI is an Implementation of a UI in figma in ChakraUI, Typescript and Nextjs. It was implemented in the class of ChakraUIForBeginners."
          }
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
}: {
  title: string;
  description: string;
  more?: string;
}) {
  return (
    <div className="mt-8 flex max-w-screen-md flex-col items-start justify-center rounded-md border-2 border-s-3 py-8 pl-8 pr-8">
      <h2 className="mb-4 text-h1 text-p-5">{title}</h2>
      <p className="mb-4 text-h3 text-[#CCC5D8]">{description}</p>
      <p className="mb-4 text-p text-s-4 underline">
        {more ? more : "read more"}
      </p>
    </div>
  );
}
