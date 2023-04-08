import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { IoArrowUndoSharp } from 'react-icons/io5'
import { cloudList, inputList } from "utils/list";
import InputBox from "~/components/InputBox";
import { useState, useEffect } from "react";
import { loginValues } from "utils/interface";
import { FcGoogle } from "react-icons/fc"
import InputBoxLogin from "~/components/InputBoxLogin";
import { signIn, signOut, GetSessionParams } from "next-auth/react";
import { useRouter } from 'next/router';

import { getSession } from "next-auth/react";

export async function getServerSideProps(context: GetSessionParams | undefined) {
    const session = await getSession(context)

    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    } else {
        return {
            props: {

            }
        }
    }
}


const Login = () => {

    const router = useRouter()
    const animation = useAnimation()

    async function sequence() {
        await animation.start({ opacity: 1, y: 20, transition: { duration: 1 } })
        animation.start({
            y: [20, -20],
            transition: {
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'reverse',
                duration: 1.5
            }
        })
    }

    useEffect(() => {
        sequence()
    }, [])


    const [data, setData] = useState<loginValues>({
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(val => ({ ...val, [e.target.name]: e.target.value }))
    }

    const [error, setError] = useState<loginValues>({
        email: '',
        password: ''
    })

    const [toggle, setToggle] = useState(false)
    const [condition, setCondition] = useState({
        first: false,
        second: false,
    })


    function validateEmail(mail: string) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return true
        } else {
            return false
        }
    }

    const handleSubmit = () => {
        const { email, password } = data

        if (!validateEmail(email)) {
            setError(e => ({ ...e, 'email': "Email is invalid!" }))
            setCondition(e => ({ ...e, "first": false }))

        } else {
            setError(e => ({ ...e, 'email': "" }))
            setCondition(e => ({ ...e, "first": true }))
        }

        if (password === '') {
            setError(e => ({ ...e, 'password': "Password cannot be empty!" }))
            setCondition(e => ({ ...e, "second": false }))

        } else if (password.length > 15) {
            setError(e => ({ ...e, 'password': "Password is too long!" }))
            setCondition(e => ({ ...e, "second": false }))

        } else if (password.length < 3) {
            setError(e => ({ ...e, 'password': "Password is too weak!" }))
            setCondition(e => ({ ...e, "second": false }))

        } else {
            setError(e => ({ ...e, 'password': "" }))
            setCondition(e => ({ ...e, "second": true }))

        }

        setToggle(current => !current)
    }

    useEffect(() => {
        const { first, second } = condition

        if (first && second) {
            login()
        } else {
            console.log("Not Passed")
        }
    }, [toggle])

    const login = async () => {
        const { email, password } = data

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        })

        if (result?.ok) {
            router.push("/")
        } else {
            console.log(result?.error)
        }
    }

    const googleSignin = async () => {
        const result = await signIn("google", {
            redirect: true,
            callbackUrl: "/"
        })

        console.log(result)
    }

    return (
        <section className="w-full h-screen bg-lblue relative overflow-hidden">

            {cloudList.map((items, i) => {
                return (
                    <motion.div initial={{ y: 400, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 0.77, 0.47, .97] }} exit={{ y: 400, opacity: 0 }} className="absolute top-0 bottom-0 w-full h-full" key={items}>
                        <Image alt={items} src={`/${items}.webp`} priority width="1300" height="1000" className="w-full h-full object-cover" />
                    </motion.div>
                )
            })}

            <div className="relative z-10 w-full h-full max-w-[1500px] mx-auto">
                <nav className="w-full h-auto p-5 flex justify-between absolute top-0 left-0">
                    <div className="flex items-center gap-x-2">
                        <Image alt="Logo" width="400" height="400" src="/logo.webp" className="w-10" />
                        <h1 className="text-2xl">GIGABIT</h1>
                    </div>

                    <div className="flex items-center gap-x-2">
                        <IoArrowUndoSharp className="text-2xl" />
                        <Link href="/register" className="">Back to register</Link>
                    </div>
                </nav>

                <div className="w-full h-screen flex items-center justify-center">
                    <div className="w-auto h-auto flex items-center gap-x-32">
                        <motion.div initial={{ opacity: 0, y: 200 }} animate={animation} exit={{ y: 200, opacity: 0 }} transition={{ duration: 1 }} key="froggy" className="md:block hidden">
                            <Image alt="Frog" src="/auth/frog.webp" width="1000" height="1000" className="w-[45vh]" />

                        </motion.div>
                        <div className="">
                            <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} exit={{ y: 200, opacity: 0 }} key="loginmain" className="w-[18rem] 2xl:w-[22rem] h-[29rem] 2xl:h-[33rem] bg-white/10 backdrop-blur-sm relative">
                                <div className="Borders select-none">
                                    <Image alt="Top" src="/auth/top.webp" width="400" height="400" className="w-full" />
                                    <Image alt="Top" src="/auth/bottom.webp" width="400" height="400" className="w-full absolute -bottom-4" />
                                </div>

                                <div className="mt-5">
                                    <h2 className="text-center text-xl">Login</h2>

                                    <div className="w-[83%] mx-auto mt-8 flex items-center flex-col gap-y-4 font-vt text-lg text-white">

                                        {inputList.map((items, i) => {
                                            return (
                                                <InputBoxLogin key={i} {...items} value={data[items.name as keyof loginValues].trim()} onChange={handleChange} title={error[items.name as keyof loginValues]} error={error} />
                                            )
                                        })}

                                        <button className="bg-google w-full rounded-lg h-11 shadow-googleShadow p-[5px] flex items-center gap-x-2 relative hover:bg-[#418DFF] transition-background ease-in-out duration-300" onClick={googleSignin}>
                                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                                <FcGoogle className="w-8" />
                                            </div>
                                            <h3 className="text-center w-full absolute">Sign in with Google</h3>
                                        </button>


                                        <button className="bg-bttn hover:bg-bttnHover transition-background ease-in-out duration-300 w-full rounded-lg h-11 shadow-bttnShadow p-[5px] flex items-center gap-x-2 relative mt-5" onClick={handleSubmit}>
                                            <h3 className="text-center w-full absolute text-2xl">Sign in</h3>
                                        </button>

                                    </div>

                                </div>

                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}

export default Login;