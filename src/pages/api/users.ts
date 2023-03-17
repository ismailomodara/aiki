import type { NextApiRequest, NextApiResponse } from 'next';

type User = {
  name: string,
  email: string
}

type ResponseData = {
  data: User[],
  status: number
}

const Users = (): User[] => {
  return [
    {
      name: "Ismail Omodara",
      email: "ismailomodara.io@gmail.com"
    },
    {
      name: "Bashir Hamza",
      email: "bashirhamza05@gmail.com"
    }
  ]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({
    data: Users(),
    status: 200
  })
}
