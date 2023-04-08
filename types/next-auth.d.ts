import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface Session {
        user: {
            name: string,
            email: string,
            verified: boolean,
        } & DefaultSession["user"]
    }
}

// declare module "next-auth" {
//     interface Session {
//         user: {
//             id: string,
//             name: string,
//             email: string,
//             picture: string,
//             sub: string,
//             id: string,
//             password: string,
//             verified: boolean,
//             emailVerified: boolean,
//             image: string,
//             iat: number,
//             exp: number,
//             jti: string
//         }
//     }
// }