/** @format */

import headerNavLinks from "@/data/headerNavLinks";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";
import Footer from "./Footer";
import Link from "./Link";
import MobileNav from "./MobileNav";
import SectionContainer from "./SectionContainer";
import ThemeSwitch from "./ThemeSwitch";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

// const variants = {
//   hidden: { opacity: 0, x: -200, y: 0 },
//   enter: { opacity: 1, x: 0, y: 0 },
//   exit: { opacity: 0, x: 0, y: -100 },
// };

const LayoutWrapper = ({ children }) => {
  const router = useRouter();

  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen ">
        <header className="flex items-center justify-between py-5 ">
          <div>
            <Link href="/" aria-label="Naim portfolio">
              <div className="flex items-center justify-between  text-accent font-semibold text-sm sm:text-sm">
                {`~${router.asPath}`}{" "}
                <Typewriter
                  options={{
                    strings: [],
                    autoStart: true,
                    loop: true,
                  }}
                />
                {/* <div className="mr-3">
                  <Logo />
                </div> */}
                {/* {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )} */}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5 ">
            <div className="hidden sm:block  mx-5 ">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  // className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                  className="p-1 font-medium text--neutral text-opacity-90   sm:p-4 hover:text-primary"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <MobileNav />
            <ThemeSwitch />
          </div>
        </header>
        {/* <main className="mb-auto"> */}
        <motion.main
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: "linear" }}
          className="mb-auto"
        >
          {children}
        </motion.main>
        {/* </main> */}
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
