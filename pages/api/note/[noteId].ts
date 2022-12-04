// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '../../../utils/supabase'
import { GetNoteResponse } from '../../../utils/types/note'

type Data = {
  data: GetNoteResponse | null,
  error: string | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { noteId } = req.query
  const { data, error } = await supabase
    .from("notes")
    .select("id, content")
    .eq("owner_id", process.env.OWNER_ID || "")
    .eq("id", noteId)
    .single()

  if (error) {
    res.status(400).json({ data: null, error: error.message })
    return
  }
  res.status(200).json({ data, error: "" })
}
