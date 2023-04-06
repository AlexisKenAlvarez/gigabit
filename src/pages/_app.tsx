import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { AnimatePresence } from 'framer-motion'

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {

  const router = useRouter()

  return (
    <AnimatePresence mode="wait">
      <div className="" key={router.pathname}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </div>
    </AnimatePresence>
  );
};

export default MyApp;
