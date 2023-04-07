import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { IoArrowUndoSharp } from 'react-icons/io5'
import { cloudList, registerInput } from "utils/list";
import InputBox from "~/components/InputBox";
import { useState, useEffect } from "react";
import { registerValues } from "utils/interface";
import { FcGoogle } from "react-icons/fc"

const Login = () => {

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


    const [data, setData] = useState<registerValues>({
        username: '',
        email: '',
        password: ''
    })

    const [error, setError] = useState<registerValues>({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(val => ({ ...val, [e.target.name]: e.target.value }))
    }

    function validateEmail(mail: string) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return true
        } else {
            return false
        }
    }

    const [toggle, setToggle] = useState(false)
    const [condition, setCondition] = useState({
        first: false,
        second: false,
        third: false,
    })

    const handleSubmit = () => {
        const { username, email, password } = data

        if (username === '') {
            setError(e => ({ ...e, 'username': "Username cannot be empty!" }))
            setCondition(e => ({ ...e, "first": false }))
        } else if (username.length > 15) {
            setError(e => ({ ...e, 'username': "Must not exceed 15 characters." }))
            setCondition(e => ({ ...e, "first": false }))

        } else if (username.length < 3) {
            setError(e => ({ ...e, 'username': "Must be atleast 3 characters." }))
            setCondition(e => ({ ...e, "first": false }))

        } else {
            setError(e => ({ ...e, 'username': "" }))
            setCondition(e => ({ ...e, "first": true }))

        }

        if (!validateEmail(email)) {
            setError(e => ({ ...e, 'email': "Email is invalid!" }))
            setCondition(e => ({ ...e, "second": false }))

        } else {
            setError(e => ({ ...e, 'email': "" }))
            setCondition(e => ({ ...e, "second": true }))


        }

        if (password === '') {
            setError(e => ({ ...e, 'password': "Password cannot be empty!" }))
            setCondition(e => ({ ...e, "third": false }))

        } else if (password.length > 15) {
            setError(e => ({ ...e, 'password': "Password is too long!" }))
            setCondition(e => ({ ...e, "third": false }))

        } else if (password.length < 3) {
            setError(e => ({ ...e, 'password': "Password is too weak!" }))
            setCondition(e => ({ ...e, "third": false }))

        } else {
            setError(e => ({ ...e, 'password': "" }))
            setCondition(e => ({ ...e, "third": true }))

        }

        setToggle(current => !current)
    }

    useEffect(() => {
        const { first, second, third } = condition
        console.log(error)

        if (first && second && third) {
            console.log("Passed")
        } else {
            console.log("Not Passed")

        }
    }, [toggle])


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
                        <Link href="/login" className="">Back to login</Link>
                    </div>
                </nav>

                <div className="w-full h-screen flex items-center justify-center">
                    <div className="w-auto h-auto flex items-center gap-x-32">
                        <motion.div initial={{ opacity: 0, y: 200 }} animate={animation} exit={{ y: 200, opacity: 0 }} transition={{ duration: 1 }} key="slime" className="md:block hidden">
                            <Image alt="Frog" src="/auth/slime.webp" width="1000" height="1000" className="w-[45vh]" />

                        </motion.div>
                        <div className="">
                            <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} exit={{ y: 200, opacity: 0 }} key="regmain" className="w-[18rem] 2xl:w-[22rem] h-[32rem] 2xl:h-[33rem] bg-white/10 backdrop-blur-sm relative">
                                <div className="Borders select-none">
                                    <Image alt="Top" src="/auth/top.webp" width="400" height="400" className="w-full" />
                                    <Image alt="Top" src="/auth/bottom.webp" width="400" height="400" className="w-full absolute -bottom-4" />
                                </div>

                                <div className="mt-5">
                                    <h2 className="text-center text-xl">Register</h2>

                                    <div className="w-[83%] mx-auto mt-8 flex items-center flex-col gap-y-4 font-vt text-lg text-white">

                                        {registerInput.map((items, i) => {
                                            return (
                                                <InputBox key={i} {...items} value={data[items.name as keyof registerValues].trim()} onChange={handleChange} title={error[items.name as keyof registerValues]} error={error} />
                                            )
                                        })}

                                        <button className="bg-google w-full rounded-lg h-11 shadow-googleShadow p-[5px] flex items-center gap-x-2 relative hover:bg-[#418DFF] transition-background ease-in-out duration-300">
                                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                                <FcGoogle className="w-8" />
                                            </div>
                                            <h3 className="text-center w-full absolute">Sign up with Google</h3>
                                        </button>


                                        <button className="bg-bttn hover:bg-bttnHover transition-background ease-in-out duration-300 w-full rounded-lg h-11 shadow-bttnShadow p-[5px] flex items-center gap-x-2 relative mt-5">
                                            <h3 className="text-center w-full absolute text-2xl" onClick={handleSubmit}>Sign up</h3>
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