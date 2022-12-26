import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Project } from "../../utils/types/project";
import Link from "next/link";


interface Props {
  project: Project
  projectId: number
  currentProjectId: number
}


const ProjectCard: React.FC<Props> = ({ project, projectId, currentProjectId }) => {
  const refContainer = useRef<HTMLDivElement>(null)
  const { current: elContainer } = refContainer

  const keys = Object.keys(project)
  const fields = keys.filter((key) => !["id", "title", "image", "description"].includes(key))
  type ObjectKey = keyof typeof project;

  useEffect(() => {
    if (!elContainer) return

    const handleScrollIntoView = () => {
      if (projectId === currentProjectId) {
        elContainer.scrollIntoView({
          behavior: "smooth"
        })
      }
    }
    handleScrollIntoView()

    window.addEventListener("resize", handleScrollIntoView)

    return () => window.removeEventListener("resize", handleScrollIntoView)
  }, [currentProjectId])

  return (
    <div ref={refContainer} className="w-full h-full">
      <div className="p-4 flex items-center flex-col gap-2">
        <div className="relative w-[225px] h-[150px] sm:w-[450px] sm:h-[300px] rounded-lg overflow-hidden">
          <Image layout="fill" src={project.image[0]} alt={project.title} />
        </div>
        <h1 className="text-3xl mt-4">{project.title}</h1>
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
