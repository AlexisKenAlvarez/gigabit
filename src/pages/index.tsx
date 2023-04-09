import { GetServerSideProps, type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { AuthUser } from "utils/interface";
import { GetSessionParams, signOut } from "next-auth/react";
import { getSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps<AuthUser> = async (context: GetSessionParams | undefined) => {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    } else {
        console.log(session)
        return {
            props: {
                name: session.user!.name,
                email: session.user!.email,
                verified: session.user?.verified
            }
        }
    }
}

const Home: NextPage<AuthUser> = ({ name, email, verified }) => {

    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                    <h1 className="text-xl font-extrabold tracking-tight text-white">
                        {email}
                        {name}
                        {verified}
                    </h1>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">

                        <h3 className="text-2xl font-bold" onClick={() => signOut()}>Click to sign out</h3>
                        <div className="text-lg">
                            Just the basics - Everything you need to know to set up your
                            database and authentication.
                        </div>

                        <Link
                            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                            href="https://create.t3.gg/en/introduction"
                            target="_blank"
                        >
                            <h3 className="text-2xl font-bold">Documentation →</h3>
                            <div className="text-lg">
                                Learn more about Create T3 App, the libraries it uses, and how
                                to deploy it.
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );



};

export default Home;
