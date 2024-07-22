import Image from "next/image";
export default function Home() {
  return (
    <main className="flex bg-primary min-h-screen flex-col justify-between px-20">
      {/* landing hero */}
      <div className="flex flex-col gap-4 mt-40">
        <span className="text-blue font-sans">Hi! my name is</span>
        <h1 className="text-5xl font-bold">Hadyan Abdul Aziz.</h1>
        <h1 className="text-gray text-5xl font-bold leading-relaxed">I create visually pleasing<br/> interfaces for the web.</h1>
        <p className="text-gray font-sans text-lg leading-relaxed">I'm a passionate Front-End web developer with hands-on experience <br/> in building web applications using React.js & Next.js with TypeScript, <br/> TailwindCSS, and Prisma, with UI/UX designing.</p>
        <span className="text-blue font-sans">Currently available for freelance</span>
      </div>
      {/* about */}
      <div className="flex flex-col gap-4 mt-40">
        <h3 className="text-2xl">About Me</h3>
        <div className="flex justify-between">
          <p className="text-gray leading-relaxed">Hi, my name is Hadyan Abdul Aziz, a graduated Information System student at <span className="text-blue">Sekolah Tinggi Teknologi Terpadu <br/> Nurul Fikri.</span>
            I'm a junior developer who works at <span className="text-blue">PT Indosat Tbk.</span> <br/>
            Fast-forward to today, and I've had the privilege of working at  - Pixelwand. <br/>
            My main focus these days is learning mobile development and finding a decent job. <br/>
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="border w-1/4">
            <Image
              src="/images/hadyan.png"
              alt="foto hadyan"
              width={180}
              height={180}
            ></Image>
          </div>
        </div>
      </div>

      <div className="h-40"></div>
    </main>
  );
}
