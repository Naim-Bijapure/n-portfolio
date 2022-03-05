/** @format */
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const N = () => {
  return (
    <>
      <div>cool man</div>
    </>
  );
};

const Ntest = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
        className="mb-auto"
      >
        <N />
      </motion.main>
    </div>
  );
};
export default Ntest;
