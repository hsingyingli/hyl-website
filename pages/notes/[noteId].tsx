import React from "react";
import supabase from '../../utils/supabase'
import dynamic from "next/dynamic";
import type { GetServerSideProps, NextPage } from 'next'
import useNotes from "../../hooks/useNotes";
import { GetNoteResponse } from "../../utils/types/note";

const Markdown = dynamic(
  () => {
    return import("../../components/Markdown");
  },
  { ssr: false }
);

interface Props {
  data: GetNoteResponse
}

const Nosts: NextPage<Props> = ({ data }) => {
  const { handleSelectNote } = useNotes()
  handleSelectNote(data.id)


  return (
    <div className="mt-4">
      <Markdown md={data.content} />
    </div>
  )
}


export const getServerSideProps: GetServerSideProps<{ data: GetNoteResponse }> = async (context) => {
  const { noteId } = context.query
  const { data, error } = await supabase
    .from("notes")
    .select(`
          id,
          content
        `)
    .eq("owner_id", process.env.OWNER_ID || "")
    .eq("id", noteId)
    .single()

  if (error) {
    return {
      redirect: {
        destination: '/notes',
        permanent: false,
      },
    }
  }

  return {
    props: {
      data: data as GetNoteResponse,
    },
  }
}


export default Nosts
