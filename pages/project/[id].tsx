/** @format */
import LayoutWrapper from "@/components/LayoutWrapper";
import ProjectCard from "@/components/ProjectCard";
import { NextRouter, useRouter } from "next/router";
import Img from "next/image";
import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "store/ThemeContext";
// import { useCycle } from "framer-motion";
// import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import projectsData from "../../data/projectsData";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: ["1"] } }, { params: { id: ["2"] } }],
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//
//   return { props: { data: "cool" } };
// }
// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.

export default function Project() {
  const { theme } = useContext(ThemeContext);

  let router: NextRouter = useRouter();
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  let projectName = (router?.query?.id as any)?.split("-").join(" ");
  let currentProject = projectsData.find((obj) => obj.title === projectName);

  if (currentProject === undefined) {
    return <></>;
  }

  return (
    <>
      <LayoutWrapper>
        {/* <div className={`flex flex-col items-center bg-[url('/static/images/bg-project-${theme}.svg')]`}> */}

        <div className={`flex flex-col items-center bg-[url('/static/images/bg-project-${theme}.svg')]`}>
          <div className="w-full text-center">
            <Slider {...settings} className="">
              {currentProject.images.map((img, index) => {
                return (
                  <div key={index}>
                    <Img src={`${img}-${theme}.png`} width={900} height={530} />
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="my-7">
            <button className="mx-2 btn btn-outline btn-primary">view</button>
            <button className="mx-2 btn btn-outline btn-primary " disabled={!currentProject.sourceCode as boolean}>
              code
            </button>
          </div>
          <div className="m-5 text-primary text-2xl font-bold n-heading-font ">{currentProject.tagLine}</div>
          <div className="m-5 prose">
            <div className="text-secondary font-semibold text-xl n-heading-font">{currentProject.title}</div>
            <div className="">{currentProject.description}</div>
          </div>

          <div className="m-5 prose">
            <div className="text-secondary font-semibold text-xl n-heading-font">Work</div>
            <div className="">{currentProject.work}</div>
          </div>

          <div className="m-5 prose">
            <div className="text-secondary font-semibold text-xl n-heading-font">Tech</div>
            <div className="">{currentProject.tech}</div>
          </div>

          <div className="m-5 prose text-center">
            <div className="text-neutral text-opacity-60 italic">Application demo</div>

            <div className="">
              <Img
                placeholder="blur"
                blurDataURL={`${currentProject.images[0]}-${theme}.png`}
                src={`/static/images/projects/N.gif`}
                width={900}
                height={530}
                priority
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
}
