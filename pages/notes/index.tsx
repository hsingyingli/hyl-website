import React from "react";
import dynamic from "next/dynamic";
import type { NextPage } from 'next'
const Markdown = dynamic(
  () => {
    return import("../../components/Markdown");
  },
  { ssr: false }
);

const Nosts: NextPage = () => {

  const initMD = `# Hello Friend
***These Notes are written using one of my practical web project [Markdown Note Editor](https://hyl-md-notebook.vercel.app/)***
![image](https://drive.google.com/uc?export=view&id=1nGwUtZdhWvzMAxzg6zJ2ChDPaSzeIxAV)
![image](https://drive.google.com/uc?export=view&id=19LVN3pWcg3g68EUjRNA8TD8V2gXeOIMp)
`

  return (
    <div className="mt-4">
      <Markdown md={initMD} />
    </div>
  )
}

export default Nosts
