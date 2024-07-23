"use client";
import { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";

interface WorkList {
  id: string,
  office: string,
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
    "roles": [
        {
          "name": "Junior Developer",
          "time": "February 2024 - Now",
          "jobdesc": ["manage API Operation", "Something about outsource"]
        },
        {
          "name": "Frontend Developer",
          "time": "November 2023 - February 2024",
          "jobdesc": ["manage API Operation", "Something about outsource"]
        },
      ]
  });

  const myExperiences = [
    {
      "id": "isat",
      "office": "PT Indosat Tbk",
      "roles": [
        {
          "name": "Junior Developer",
          "time": "February 2024 - Now",
          "jobdesc": ["manage API Operation", "Something about outsource"]
        },
        {
          "name": "Frontend Developer",
          "time": "November 2023 - February 2024",
          "jobdesc": ["manage API Operation", "Something about outsource"]
        },
      ]
    },
    {
      "id": "isi",
      "office": "PT Ihsan Solusi Informatika",
      "roles": [
        {
          "name": "React Developer",
          "time": "March 2023 - November 2023",
          "jobdesc": ["manage API Operation", "Something about outsource"]
        }
      ]
    },
    {
      "id": "nf",
      "office": "STTNF",
      "roles": [
        {
          "name": "Assistant Lecturer Database",
          "time": "March 2022 - June 2022",
          "jobdesc": ["manage API Operation", "Something about outsource"]
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
        <div>
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
        <div className="flex flex-col gap-8 col-span-3">
          {work.roles.map((role, i) => {
            return(
            <div className="flex flex-col gap-2">
              <h3>{role.name} <span className="text-blue">@{work.office}</span></h3>
              <p className="text-gray font-sans text-sm">{role.time}</p>
              <ul className="flex flex-col gap-2">
                {role.jobdesc.map((desc, id) => {
                  return(
                    <li className="flex flex-row justify-start items-center"><AiFillCaretRight />{desc}</li>
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