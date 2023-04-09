import { NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const secret = process.env.NEXT_JWT_SECRET
    const { token } = req.body

    try {
        const decoded = verify(token, secret as string)

        if (decoded) {
            res.status(200).json({ msg: "JWT IS VALID", user: decoded })
        } else {
            res.status(200).json({ msg: "JWT IS INVALID" })
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({ error })
    }


}