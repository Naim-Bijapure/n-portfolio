/** @format */

import { ClientReload } from "@/components/ClientReload";
import "@/css/global.scss";
import "@/css/prism.scss";
import "@/css/tailwind.scss";

import { theme } from "@/data/siteMetadata";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useContext } from "react";
import ThemeProvider, { ThemeContext } from "store/ThemeContext";

const isDevelopment = process.env.NODE_ENV === "development";
const isSocket = process.env.SOCKET;

// FONT AWESOME CONFIG
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;

export default function App({ Component, pageProps, router }) {
  return (
    <>
      {/* <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}> */}

      <ThemeProvider>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        {isDevelopment && isSocket && <ClientReload />}
        {/* <Analytics /> */}
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div>
            <Component {...pageProps} key={router.pathname} />
          </div>
        </AnimatePresence>
        {/* </ThemeProvider> */}
      </ThemeProvider>
    </>
  );
}
