"use client";
import { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";

interface WorkList {
  id: string,
  office: string,
  url_office: string,
  roles: {
    name: string,
    time: string,
    jobdesc: string[]
  }[],
}

export default function Experience(){
  const [work, setWork] = useState<WorkList>({
    "id": "isat",
    "office": "PT Indosat Tbk",
    "url_office": "https://ioh.co.id/portal/id/iohindex",
    "roles": [
        {
          "name": "Junior Developer",
          "time": "February 2024 - Now",
          "jobdesc": ["A Junior Developer from PT Graha Karya Informasi that was placed at PT Indosat Tbk.", "Managed API operations"]
        },
        {
          "name": "Frontend Developer",
          "time": "November 2023 - February 2024",
          "jobdesc": ["A Frontend Developer from PT Prima Raya Solusindo that was placed at PT Indosat Tbk.", "Developed A Frontend Digital Partnerships Portal for API Services collaborating with Backend, UI/UX and Business team. Utilizing the Next.js framework and TypeScript for Frontend Application."]
        },
      ]
  });

  const myExperiences = [
    {
      "id": "isat",
      "office": "PT Indosat Tbk",
      "url_office": "https://ioh.co.id/portal/id/iohindex",
      "roles": [
        {
          "name": "Junior Developer",
          "time": "February 2024 - Now",
          "jobdesc": ["A Junior Developer from PT Graha Karya Informasi that was placed at PT Indosat Tbk.", "Managed API operations"]
        },
        {
          "name": "Frontend Developer",
          "time": "November 2023 - February 2024",
          "jobdesc": ["A Frontend Developer from PT Prima Raya Solusindo that was placed at PT Indosat Tbk.", "Developed a Frontend Digital Partnerships Portal for API Services collaborating with Backend, UI/UX and Business team. Utilizing the Next.js framework and TypeScript for Frontend Application."]
        },
      ]
    },
    {
      "id": "isi",
      "office": "PT Ihsan Solusi Informatika",
      "url_office": "https://ihsansolusi.co.id/",
      "roles": [
        {
          "name": "React Developer",
          "time": "March 2023 - November 2023",
          "jobdesc": ["A React Developer from PT Santai Berkualitas Syberindo that was placed at PT Ihsan Solusi Informatika.", "Developed a Frontend Bank Operating System for Sharia Banking institutions collaborating with Frontend, Backend, QA, and PM team. Utilizing the Next.js framework and TypeScript for Frontend Application."]
        }
      ]
    },
    {
      "id": "nf",
      "office": "STTNF",
      "url_office": "https://nurulfikri.ac.id/",
      "roles": [
        {
          "name": "Assistant Lecturer Database",
          "time": "March 2022 - June 2022",
          "jobdesc": ["Assist in teaching students about database material using MySQL starting from installation, database management, procedures, triggers, transactions, inheritance, and schema"]
        }
      ]
    },
  ]

  const handleWork = (works: any) => {
    setWork(works)
  }
  return(
    <div id="experiences" className="flex flex-col gap-4 mt-12 pt-20 xl:mt-40 mb-24 mx-auto w-2/3">
      <h1 className="text-xl xl:text-2xl font-normal mb-8">My Experiences</h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full">
        <div className="w-[30%]">
          <ul className="flex flex-row md:flex-col">
            {myExperiences.map((exp, index) => {
              return (
                <li
                  onClick={() => handleWork(exp)} 
                  className={`flex border-b-2  md:border-l-2 md:border-b-0 p-4 font-sans hover:text-blue hover:border-blue ${exp.id === work.id ? 'text-blue border-blue': 'text-gray border-gray/20'} transform hover:cursor-pointer transition duration-300`}
                  key={index}>{exp.office}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="w-[70%] flex flex-col gap-8 col-span-3">
          {work.roles.map((role, i) => {
            return(
            <div className="flex flex-col gap-2">
              <h3 className="text-lg">{role.name} <span className="text-blue transition duration-200"><a className="hover:underline hover:underline-offset-8 hover:cursor-pointer" href={work.url_office} target="_blank">@{work.office}</a></span></h3>
              <p className="text-gray font-sans text-sm">{role.time}</p>
              <ul className="flex flex-col gap-2">
                {role.jobdesc.map((desc, id) => {
                  return(
                    <li className="flex flex-row gap-2 justify-between items-start">
                      <AiFillCaretRight className="text-base w-[10%] mt-1" />
                      <p className="text-left w-full text-gray text-base">{desc}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}