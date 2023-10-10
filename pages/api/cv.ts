// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).redirect('https://drive.google.com/file/d/14nchrzVN9fEqAD9b2WRpK-ljTYRiG87v/view?usp=drive_link')
}
