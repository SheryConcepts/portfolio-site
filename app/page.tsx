import Intro from "./(components)/intro";
import Bio from "./(components)/bio";
import Skills from "./(components)/skills";
import Projects from "./(components)/projects";

export default function Home() {
  return (
    <>
      <Intro />
      <Bio />
      <Skills />
      <Projects />
    </>
  );
}
