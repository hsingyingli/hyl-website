import React, { Fragment } from "react";
import { ItemList, Item } from "../../utils/types/skill";
import ProgressBar from "../ProgressBar";

interface listItemProps {
  item: Item
}

const ListItem: React.FC<listItemProps> = ({ item }) => {
  return (
    <Fragment>
      <h1 className="text-xl mb-2">{item.title}</h1>
      <ul className="grid grid-cols-2">
        {
          item.tools.map((element) => {
            return <li key={element} className="text-gray-500 mb-1">{element}</li>
          })
        }
      </ul>
    </Fragment>
  )
}

interface Props {
  skills: ItemList
}
const Skills: React.FC<Props> = ({ skills }) => {
  return (
    <div className='min-h-screen'>
      <h1 className='text-3xl font-bold my-5 text-teal-500'>Skills</h1>
      <div className='mt-10 mb-20'>
        <h2 className='text-xl my-3'>Machine Learning</h2>
        <ProgressBar color='#81E6D9' progress={0.7} />
        <h2 className='text-xl my-3'>Web Development</h2>
        <ProgressBar color='#FBD28D' progress={0.5} />
        <h2 className='text-xl my-3'>Devops</h2>
        <ProgressBar color='#FBB6CD' progress={0.3} />
      </div>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 auto-rows-auto gap-8'>
        {skills.map((skill, idx) => {
          return (
            <div key={idx}>
              <ListItem item={skill} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
