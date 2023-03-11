export default function Bio() {
  return (
    <div className="max-w-screen-3xl h-screen bg-p-9 px-20 pt-16">
      <div className="mx-auto mt-40 max-w-screen-lg">
        <h2 className="font-roboto-mono text-h3 text-[#CECECF] sm:text-h3 md:text-h2 lg:text-h2 xl:text-h2">
          I am a <span className="text-[#DB94AC]">Software Developer</span>,
          <br />
          building type-safe
          <br />
          <span className="text-[#DB94AC]">Web Apps</span>
        </h2>
        <button className="text-4 mt-8  rounded-md border-b-2 border-b-s-3 bg-[#0b041633] px-5 py-4 text-center text-[#DB94AC] hover:bg-[#0b041652]">
          Projects
        </button>
        <h2 className="mt-8 font-roboto-mono text-p text-[#CECECF] sm:text-p md:text-h3 lg:text-h3 xl:text-h3">
          I write about things I beautiful on my{" "}
          <span className="text-[#DB94AC] underline">Blog</span>.
        </h2>
      </div>
    </div>
  );
}
