import About from "@/components/homes/about";
import Contacts from "@/components/homes/contacts";
import Experience from "@/components/homes/experiences";
import PhotoHeader from "@/components/homes/photo-header";
import Projects from "@/components/homes/projects";
import Services from "@/components/homes/services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-primary min-h-screen flex-col justify-between px-8 xl:px-20 gap-y-16">
      {/* landing hero */}
      <div id="hero"></div>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-8 mt-12 xl:mt-40 mb-24">
        <div className="flex flex-col justify-center items-center xl:items-start text-center xl:text-left gap-4 order-2 xl:order-none">
          <span className="text-blue font-sans">Hi! my name is</span>
          <h1 className="text-4xl xl:text-5xl font-bold">Hadyan Abdul Aziz.</h1>
          <h1 className="text-gray text-4xl xl:text-5xl font-bold">I create visually pleasing interfaces for the web.</h1>
          <p className="text-gray font-sans text-base xl:text-lg">I am a passionate Front-End web developer with hands-on experience in building web applications using React.js & Next.js with TypeScript, TailwindCSS, and Prisma, with UI/UX designing.</p>
          <span className="text-blue font-sans">Currently available for freelance</span>
          <div className="flex justify-center items-center xl:hidden border border-blue rounded px-4 py-2 hover:bg-blue/20 hover:cursor-pointer">
            <a href="/Resume-HadyanAbdulAziz-Jul2024.pdf" className="text-blue" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
        {/* <div className="flex justify-center items-center border ">
          <Image src="/images/hadyan.png" alt="My Photo" width="0" height="0" sizes="100vw" className="w-[150px] h-auto xl:w-[400px]" />
        </div> */}
        <PhotoHeader />
      </div>
      {/* about */}
      <About />

      {/* services */}
      <Services />

      {/* experiences */}
      <Experience />

      {/* projects */}
      <Projects />

      {/* contacts */}
      <Contacts />
    </main>
  );
}
