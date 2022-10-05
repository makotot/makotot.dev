import type { NextApiRequest, NextApiResponse } from "next"
import { getPosts } from "../../utils/getPosts"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page } = req.query
  const posts = getPosts(Number(page))

  res.status(200).json(posts)
}
