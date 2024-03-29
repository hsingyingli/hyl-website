import React from "react";
import Image from "next/image";
import { Project } from "../../utils/types/project";
import Link from "next/link";


interface Props {
  project: Project
  id: number
  total: number
}


const ProjectCard: React.FC<Props> = ({ project, id, total }) => {

  const keys = Object.keys(project)
  const fields = keys.filter((key) => !["id", "title", "image", "description"].includes(key))
  type ObjectKey = keyof typeof project;


  return (
    <div className="w-full h-full">
      <div className="p-4 flex items-center flex-col gap-2">
        <div className="relative w-[225px] h-[150px] sm:w-[450px] sm:h-[300px] rounded-lg overflow-hidden">
          <Image priority={true} layout="fill" src={project.image[0]} alt={project.title} />
        </div>
        <h1 className="text-2xl mt-4">{`Case: ${id} of ${total}:  ${project.title}`}</h1>
        <p className="mt-4 leading-6">{project.description}</p>
        <div className="mt-4">
          <ul>
            {
              fields.map((field) => {
                const key = field as ObjectKey
                const data = project[key]
                if (!Array.isArray(data)) {
                  const url = data as string
                  return <li key={field} className="my-3"><span className="p-1 rounded-sm bg-teal-300 bg-opacity-50">{field}</span>: <Link href={url}>{url}</Link></li>
                }
                return <li key={field} className="my-3"><span className="p-1 rounded-sm bg-teal-300 bg-opacity-50">{field}</span>: {
                  data.map((d, idx) => <span key={d}>{idx === 0 ? "" : ", "}{d}</span>)
                }</li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}


export default ProjectCard
