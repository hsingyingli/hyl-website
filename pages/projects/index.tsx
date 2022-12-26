import path from 'path'
import fs from 'fs'
import React, { useRef, useState, useEffect } from "react";
import { GetStaticProps } from "next"
import ProjectCard from "../../components/ProjectCard";
import { ProjectArray } from "../../utils/types/project";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"


interface Props {
  projects: ProjectArray
}

const ProjectSlider: React.FC<Props> = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState(0)


  const nextProject = () => {
    setCurrentProject(prev => {
      if (prev === projects.length - 1) return prev
      return prev + 1
    })
  }
  const prevProject = () => {
    setCurrentProject(prev => {
      if (prev === 0) return prev
      return prev - 1
    })
  }


  return (
    <div className="mt-[72px] w-full min-h-[calc(100vh_-_72px)] flex flex-col gap-2 items-center justify-center  relative">
      <div className="w-full h-full grid grid-flow-col auto-cols-[100%] overflow-hidden">
        {
          projects.map((project, idx) => {
            return (
              <ProjectCard key={project.id} project={project} projectId={idx} currentProjectId={currentProject} />
            )
          })
        }
      </div>
      {
        currentProject === 0 ? null : (
          <button className="absolute top-1/4 left-0 p-3" onClick={prevProject}>
            <FaAngleLeft className="w-8 h-8" />
          </button>
        )
      }
      {
        currentProject === projects.length - 1 ? null : (
          <button className="absolute top-1/4 right-0 p-3" onClick={nextProject}>
            <FaAngleRight className="w-8 h-8" />
          </button>
        )
      }
    </div>
  )
}

export default ProjectSlider


export const getStaticProps: GetStaticProps = async () => {
  const rawData = fs.readFileSync(path.join('public', 'projects.json'), 'utf8')
  const data = JSON.parse(rawData)

  return {
    props: {
      projects: data.projects
    }
  }
}
