import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import type { NextPage } from 'next'
import { useRouter } from "next/router"
import useNotes from "../../hooks/useNotes";

const Markdown = dynamic(
  () => {
    return import("../../components/Markdown");
  },
  { ssr: false }
);

const Nosts: NextPage = () => {
  const router = useRouter();
  const { noteId } = router.query
  const [content, setContent] = useState("")
  const { handleSelectNote } = useNotes()

  useEffect(() => {
    const fetchContent = async () => {
      const res = await fetch(`/api/note/${noteId}`, { method: "GET" })
      const { data, error } = await res.json()

      if (error) {
        router.push("/notes")
        return
      }

      handleSelectNote(data.id)
      setContent(data.content)
    }

    fetchContent()

  }, [noteId])

  return (
    <div className="mt-4">
      <Markdown md={content} />
    </div>
  )
}

export default Nosts
