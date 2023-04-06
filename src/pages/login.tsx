import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

const Login = () => {

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

            <div className="relative z-10">
                <Link href="/register" className="absolute top-5 right-5">Back to register</Link>
            </div>


        </section>
    );
}

export default Login;