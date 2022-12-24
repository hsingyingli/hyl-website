import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import type { NextPage } from 'next'
import { useRouter } from "next/router"
import useNotes from "../../hooks/useNotes";
import Loading from "../../components/Loading";

const Markdown = dynamic(
  () => {
    return import("../../components/Markdown");
  },
  { ssr: false }
);

const Nosts: NextPage = () => {
  const router = useRouter();
  const { noteId } = router.query
  const [isLoading, setIsLoading] = useState(true)
  const [content, setContent] = useState("")
  const { handleSelectNote } = useNotes()

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true)
      const res = await fetch(`/api/note/${noteId}`, { method: "GET" })
      const { data, error } = await res.json()

      if (error) {
        router.push("/notes")
        return
      }

      handleSelectNote(data.id)
      setContent(data.content)
      setIsLoading(false)
    }

    fetchContent()

  }, [noteId])

  return (
    <div className="mt-4">
      {
        isLoading ?
          <Loading />
          :
          <Markdown md={content} />
      }
    </div>
  )
}

export default Nosts
