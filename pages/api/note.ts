// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '../../utils/supabase'
import { Notes } from '../../utils/types/note'

type Data = {
  data: Notes | null,
  error: string | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { data, error } = await supabase.from("notes").select("*").eq("owner_id", process.env.OWNER_ID || "").order("title")
  if (error) {
    res.status(400).json({ data: null, error: error.message })
    return
  }
  res.status(200).json({ data, error: "" })
}
