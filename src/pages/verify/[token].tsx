import Image from "next/image";
import Button from "~/components/Button";
import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react'

const Token = () => {

    const [rotation, setRotation] = useState(true)

    const { push } = useRouter()
    const handleContinue = () => {
        push("/login")
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(curr => !curr)
        }, 5000)

        return () => clearInterval(interval)
    }, [])


    return (
        <section className="w-full h-screen relative px-10 overflow-hidden">
            <Image alt="background" src="/cloud3.webp" width="1400" height="1400" className="absolute top-0 left-0 w-full h-full object-cover" />

            <nav className="w-full h-auto p-5 flex justify-between absolute top-0 left-0">
                <div className="flex items-center gap-x-2">
                    <Image alt="Logo" width="400" height="400" src="/logo.webp" className="w-10" />
                    <h1 className="text-2xl">GIGABIT</h1>
                </div>
            </nav>

            <div className="relative z-10 flex items-center justify-center h-full flex-col">
                <div className="py-10 px-12 bg-white/20 backdrop-blur-sm text-white text-center relative pb-20 max-w-[650px]">
                    <Image src="/verify/heart.webp" alt="heart" width="200" height="200" className="w-6 mx-auto" />
                    <h1 className="text-4xl  mx-auto mt-5">EMAIL ADDRESS VERIFIED</h1>
                    <p className="font-poppins mt-2 max-w-[550px] sm:text-base text-sm">Thank you for verifying alexisken143@yahoo.com as your email address.</p>

                    <div className="max-w-[14rem] font-vt mx-auto">
                        <Button onClick={handleContinue} text="Continue" />
                    </div>

                </div>
                <div className="relative max-w-[650px]">
                    <motion.div initial={{ x: "8%", y: "-100%" }} animate={{ x: "90%" }} transition={{ duration: 5, ease: "linear", repeat: Infinity, repeatType: "reverse" }} className="translate-y-full absolute h-10 top-0 left-0 w-full">
                        <motion.div animate={rotation ? { rotate: 360 } : {rotate: -360}} transition={{ duration: 1, ease: "linear", repeat: Infinity }} className="w-10 h-10">
                            <Image src="/verify/enemy.png" alt="Enemy" width="200" height="200" className="w-10 origin-center" />

                        </motion.div>
                    </motion.div>

                    <Image src="/verify/platform.png" alt="Platform" width="1000" height="200" className=" mx-auto w-full" />
                </div>
            </div>
        </section>
    );
}

export default Token;