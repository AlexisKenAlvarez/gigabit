import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';
import { IoArrowUndoSharp } from 'react-icons/io5'
import { cloudList, inputList } from "utils/list";
import InputBox from "~/components/InputBox";
import { useState } from "react";
import { loginType, loginValues } from "utils/interface";
import { FcGoogle } from "react-icons/fc"

const Login = () => {

    const [data, setData] = useState<loginValues>({
        username: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(val => ({ ...val, [e.target.name]: e.target.value }))
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
                        <Image alt="Frog" src="/auth/frog.webp" width="1000" height="1000" className="w-[45vh]" />
                        <div className="">
                            <div className="w-[18rem] 2xl:w-[22rem] h-[29rem] 2xl:h-[33rem] bg-white/10 backdrop-blur-sm relative">
                                <div className="Borders select-none">
                                    <Image alt="Top" src="/auth/top.webp" width="400" height="400" className="w-full" />
                                    <Image alt="Top" src="/auth/bottom.webp" width="400" height="400" className="w-full absolute -bottom-4" />
                                </div>

                                <div className="mt-5">
                                    <h2 className="text-center text-xl">Login</h2>

                                    <div className="w-[83%] mx-auto mt-8 flex items-center flex-col gap-y-4 font-vt text-lg text-white">

                                        {inputList.map((items, i) => {
                                            return (
                                                <InputBox key={i} {...items} value={data[items.name as keyof loginValues].trim()} onChange={handleChange} />
                                            )
                                        })}

                                        <button className="bg-google w-full rounded-lg h-11 shadow-googleShadow p-[5px] flex items-center gap-x-2 relative">
                                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                                <FcGoogle className="w-8" />
                                            </div>
                                            <h3 className="text-center w-full absolute">Sign in with Google</h3>
                                        </button>


                                        <button className="bg-bttn w-full rounded-lg h-11 shadow-bttnShadow p-[5px] flex items-center gap-x-2 relative mt-5">
                                            <h3 className="text-center w-full absolute text-2xl">Sign in</h3>
                                        </button>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}

export default Login;