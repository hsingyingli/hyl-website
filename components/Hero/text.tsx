import React, { Fragment } from "react";


interface Props {
  text: string
}

const Text: React.FC<Props> = ({ text }) => {
  return (
    <Fragment>
      {
        text.split('').map((character, idx) => {
          return (
            <span key={idx} className='hover:animate-textbounce hover:text-teal-500 inline-block whitespace-pre'>
              {character}
            </span>
          )
        })
      }
    </Fragment>
  )
}

export default Text
