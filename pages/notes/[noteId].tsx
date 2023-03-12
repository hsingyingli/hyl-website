import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from "next/router"
import useNotes from "../../hooks/useNotes";
import Loading from "../../components/Loading";
import supabase from "../../utils/supabase";

const Markdown = dynamic(
  () => {
    return import("../../components/Markdown");
  },
  { ssr: false }
);

interface Props {
  note: {
    id: number,
    content: string
  } | null
}


const Nosts: NextPage<Props> = ({ note }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true)
  const [content, setContent] = useState("")
  const { handleSelectNote } = useNotes()


  useEffect(() => {
    setIsLoading(true)
    if (note == null) {
      router.push("/notes")
      setIsLoading(false)
      return
    }
    handleSelectNote(note.id)
    setContent(note.content)
    setIsLoading(false)

  }, [note])

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



export const getStaticProps: GetStaticProps = async ({ params }) => {
  const noteId = params?.noteId
  const { data, error } = await supabase
    .from("notes")
    .select("id, content")
    .eq("owner_id", process.env.OWNER_ID || "")
    .eq("id", noteId)
    .single()

  if (error) {
    return {
      props: {},
      redirect: {
        destination: "/notes"
      }
    }
  }

  return {
    props: {
      note: data,
    },
    revalidate: 30, // In seconds
  }
}

export async function getStaticPaths() {
  const { data, error } = await supabase
    .from("notes")
    .select("id")
    .eq("owner_id", process.env.OWNER_ID || "")

  if (error) {
    return { paths: [], fallback: 'blocking' }
  }

  const paths = data.map((id) => ({
    params: { noteId: id.id.toString() },
  }))

  return { paths, fallback: 'blocking' }
}
