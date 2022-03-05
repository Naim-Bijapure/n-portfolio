/** @format */
import LayoutWrapper from "@/components/LayoutWrapper";
import ProjectCard from "@/components/ProjectCard";
import { NextRouter, useRouter } from "next/router";
import Img from "next/image";
import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "store/ThemeContext";
import { useCycle } from "framer-motion";
import { motion } from "framer-motion";

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: ["1"] } }, { params: { id: ["2"] } }],
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   console.log("params: ", params);
//   return { props: { data: "cool" } };
// }
// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
export const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 400px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Project({ data }) {
  const { theme } = useContext(ThemeContext);

  // let router: NextRouter = useRouter();

  // const [isOpen, toggleOpen] = useCycle(false, true);
  // const containerRef = useRef(null);
  // const { height } = useDimensions(containerRef);
  // console.log("height: ", height);
  const onLoad = () => {
    alert("ool");
  };

  return (
    <>
      <LayoutWrapper>
        {/* <Img src={`/static/images/projects/project_1-${theme}.png`} width="900" height="800" /> */}

        <div className="flex flex-col items-center">
          <div className="self-center">
            <Img src={`/static/images/projects/project_1-${theme}.png`} width={900} height={530} />
          </div>
          <div className="m-5">
            <button className="mx-2 btn btn-primary">view</button>
            <button className="mx-2 btn btn-primary">code</button>
          </div>
          <div className="m-5 text-primary text-2xl font-bold ">Invoice automation ocr software</div>
          <div className="m-5 prose">
            <div className="text-secondary font-semibold">vDigi Docr</div>
            <div className="text-secondary-content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim tempora repellendus eos deserunt corrupti
              eum necessitatibus laborum ut voluptatem, tempore odit asperiores ratione ex perferendis quisquam totam
              quo consequatur quod?
            </div>
          </div>

          <div className="m-5 prose">
            <div className="text-secondary font-semibold">Work</div>
            <div className="text-secondary-content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim tempora repellendus eos deserunt corrupti
              eum necessitatibus laborum ut voluptatem, tempore odit asperiores ratione ex perferendis quisquam totam
              quo consequatur quod?
            </div>
          </div>

          <div className="m-5 prose">
            <div className="text-secondary font-semibold">Tech</div>
            <div className="text-secondary-content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim tempora repellendus eos deserunt corrupti
              eum necessitatibus laborum ut voluptatem, tempore odit asperiores ratione ex perferendis quisquam totam
              quo consequatur quod?
            </div>
          </div>

          <div className="m-5 prose">
            <div className="text-secondary italic">software workflow</div>

            <div className="">
              <Img src={`/static/images/projects/N.gif`} width={900} height={530} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
}
