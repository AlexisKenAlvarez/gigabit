import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoArrowUndoSharp } from 'react-icons/io5'

const Register = () => {

    const cloudList = [
        'cloud3',
        'cloud2',
        'cloud1'

    ]

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
                <nav className="w-full h-auto p-5 flex justify-between absolute left-0 top-0">
                    <div className="flex items-center gap-x-2">
                        <Image alt="Logo" width="400" height="400" src="/logo.webp" className="w-10" />
                        <h1 className="text-2xl">GIGABIT</h1>
                    </div>

                    <div className="flex items-center gap-x-2">
                        <IoArrowUndoSharp className="text-2xl" />
                        <Link href="/login" className="">Back to login</Link>
                    </div>
                </nav>
            </div>

        </section>
    );
}

export default Register;