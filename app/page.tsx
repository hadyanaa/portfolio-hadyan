import Services from "@/components/homes/services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-primary min-h-screen flex-col justify-between px-8 xl:px-20 gap-y-16">
      {/* landing hero */}
      <div className="flex flex-col xl:flex-row justify-center items-center gap-8 mt-12 xl:mt-40 mb-24">
        <div className="flex flex-col justify-center items-center xl:items-start text-center xl:text-left gap-4 order-2 xl:order-none">
          <span className="text-blue font-sans">Hi! my name is</span>
          <h1 className="text-4xl xl:text-5xl font-bold">Hadyan Abdul Aziz.</h1>
          <h1 className="text-gray text-4xl xl:text-5xl font-bold">I create visually pleasing interfaces for the web.</h1>
          <p className="text-gray font-sans text-base xl:text-lg">I'm a passionate Front-End web developer with hands-on experience in building web applications using React.js & Next.js with TypeScript, TailwindCSS, and Prisma, with UI/UX designing.</p>
          <span className="text-blue font-sans">Currently available for freelance</span>
          <div className="flex justify-center items-center xl:hidden border border-blue rounded px-4 py-2 hover:bg-blue/20 hover:cursor-pointer">
            <p className="text-blue">Resume</p>
          </div>
        </div>
        <div className="flex justify-center items-center border ">
          <Image src="/images/hadyan.png" alt="My Photo" width="0" height="0" sizes="100vw" className="w-[150px] h-auto xl:w-[400px]" />
        </div>
      </div>
      {/* about */}
      <div className="flex flex-col gap-4 mt-12 xl:mt-40 mb-24">
        <h1 className="text-xl xl:text-2xl font-normal">About Me</h1>
        <p className="text-gray font-sans text-sm xl:text-base text-justify leading-relaxed">I graduated with a bachelor's degree in information system from  
          <span className="text-blue"> Sekolah Tinggi Teknologi Terpadu Nurul Fikri</span> in March 2023, where I gained experience
          in various programming languages and tools, with a focus on frontend development. During my studies, I completed several 
          projects using React, including a responsive e-commerce website. I also developed a custom content management system for a 
          client using Laravel. I am passionate about learning and growing in the field of frontend development, and I am constantly 
          seeking out new challenges and opportunities to expand my skills. I have a particular interest in React, and I have completed 
          multiple certifications and courses related to this framework. I also have skills in Figma, a software for designing user interfaces, 
          and SQL, a language for managing databases.
        </p>
      </div>

      {/* services */}
      <Services />
    </main>
  );
}
