import Image from "next/image";
import { AiFillCaretRight } from "react-icons/ai";

export default function Services(){
  const myServices = [
    {
      "name": "Full Stack Development",
      "description": "Lorem Ipsum dolor sit amet",
      "service": ["Create single page", "Responsive web design", "Light and dark mode web"]
    },
    {
      "name": "UI/UX Design",
      "description": "Lorem ipsum dolor sit amet",
      "service": ["designing ui/ux with figma", "prototyping design"]
    },
    {
      "name": "RESTful APIs",
      "description": "Lorem ipsum dolor sit amet",
      "service": ["manage API service", "create API"]
    }
  ];

  const myStacks = [
    {
      "name": "javascript",
      "path": "/icons/tech-stack/javascript.svg"
    },
    {
      "name": "typescript",
      "path": "/icons/tech-stack/typescript.svg"
    },
    {
      "name": "react",
      "path": "/icons/tech-stack/react.svg"
    },
    {
      "name": "next",
      "path": "/icons/tech-stack/nextjs.svg"
    },
    {
      "name": "nodejs",
      "path": "/icons/tech-stack/nodejs.svg"
    },
    {
      "name": "laravel",
      "path": "/icons/tech-stack/laravel.svg"
    },
    {
      "name": "php",
      "path": "/icons/tech-stack/php.svg"
    },
    {
      "name": "go",
      "path": "/icons/tech-stack/go.svg"
    },
    {
      "name": "python",
      "path": "/icons/tech-stack/python.svg"
    },
    {
      "name": "postgresql",
      "path": "/icons/tech-stack/postgresql.svg"
    },
    {
      "name": "mysql",
      "path": "/icons/tech-stack/mysql.svg"
    },
  ]
  return(
    <>
      <div id="services" className="flex flex-col justify-start items-center pt-20 mb-24 gap-8">
        <h1 className="text-xl xl:text-2xl font-normal">What I Do</h1>
        <div className="grid grid-cols-1 xl:grid-cols-3 w-full gap-8">
          {myServices.map((serve, index) => {
            return (
              <div className="flex flex-col justify-center items-center gap-4 py-8 shadow-md shadow-slate-600" key={index}>
                <h3 className="text-gray font-sans font-normal text-base xl:text-lg">{serve.name}</h3>
                <p className="text-gray font-sans font-light text-sm xl:text-base hidden">{serve.description}</p>
                <ol className="text-center">
                  {serve.service.map((s, i) => {
                    return (
                      <li className="flex flex-row items-start justify-start gap-2" key={i}><AiFillCaretRight />{s}</li>
                    )
                  })}
                </ol>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col justify-start items-center mb-24 gap-8">
        <h1 className="text-xl xl:text-2xl font-normal">My Stacks</h1>
        <div className="flex gap-4 flex-wrap">
          {myStacks.map((stack, index) => {
            return (
              <Image key={`stack-${index}`} src={stack.path} alt={stack.name} width="0" height="0" sizes="100vw" className="w-[40px] h-auto xl:w-[60px]" />
            )
          })}
        </div>
      </div>

    </>
  )
}