import type { NextApiRequest, NextApiResponse } from "next"
import { getPosts } from "../../utils/getPosts"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const posts = getPosts()

  res.status(200).json(posts)
}
