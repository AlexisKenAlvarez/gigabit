import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { AnimatePresence } from 'framer-motion'
import localFont from '@next/font/local'
const myFont = localFont({ src: '../../fonts/pixel.ttf' })

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {

  const router = useRouter()

  return (
    <AnimatePresence mode="wait">
      <div key={router.pathname} className={myFont.className}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </div>
    </AnimatePresence>
  );
};

export default MyApp;
