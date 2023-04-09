import { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken'
import { registerValues } from 'utils/interface';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {
        return await register(req, res)
    } else if (req.method === "GET") {
        return await getUser(req, res)
    }
}

async function register(req: NextApiRequest, res: NextApiResponse) {
    const secret = process.env.NEXT_JWT_SECRET
    const { username, email, password }: registerValues = req.body
    const hashed = await hash(password, 10)

    try {

        const notUnique = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (notUnique) {
            res.status(200).json({ success: false, msg: "This email already exist!", error: "email" })
            console.log("Email already exist")
        } else {
            const user = await prisma.user.create({
                data: {
                    name: username,
                    email: email,
                    password: hashed,
                    verified: false,
                }
            })

            const token = sign(
                {
                    expiresIn: "24h",
                    username: username,
                    email: email
                },
                secret as string,
                { expiresIn: "24h" }
            )

            const verification = await prisma.verificationToken.create({
                data: {
                    email,
                    token,
                }
            })

            res.status(200).json({ success: true, msg: "Account created successfuly!" })
            console.log("Success")
        }

    } catch (error) {
        res.status(200).json({ success: false, msg: error })
        console.log(error)
    }

}

async function getUser(req: NextApiRequest, res: NextApiResponse) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email
            }
        })

        res.status(200).json({ success: true, user })
        console.log(user?.password)

    } catch (error) {
        res.status(200).json({ success: false, msg: error })
        console.log(error)
    }
}