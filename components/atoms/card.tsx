import Image from "next/image";
import { FC } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface CardProps {
  title: string;
  category: string;
  description: string;
  stack: string[];
  url_image: string;
  url_project: string;
  className?: string;
}

const Card: FC<CardProps> = ({ title, category, description, stack, url_image, url_project, className }) => {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden">
      <div className={`relative w-full h-52 text-sm overflow-hidden ${className}`}>
        <Image
          className="object-cover hover:scale-110 hover:opacity-10"
          alt={`image ${title}`}
          src={url_image}
          layout="fill"
          objectFit="cover"
        />
        <div className="flex justify-center items-center p-8">
          <p>{description}</p>
        </div>
      </div>
      <a href={url_project} className="hover:!text-blue text-gray" target="_blank">
        <div className="flex flex-col p-4 gap-2 bg-nav">
          <div className="flex flex-row flex-wrap gap-2">
          {stack.map((s, i) => (
            <span className="text-xs border p-1 rounded-lg text-gray" key={i}>{s}</span>
          ))}
          </div>
          <div className="flex justify-between">
            <h4 className="font-normal">{title}</h4>
              <FaArrowUpRightFromSquare />

          </div>
        </div>
      </a>
    </div>
  )
}

export default Card;