import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { email } = req.body

    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        
        res.status(200).json({ success: true, user })

    } catch (error) {

        res.status(404).json({ success: false })
        console.log(error)
    }



}