/** @format */

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import "photoswipe/dist/photoswipe.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import ProjectCard from "@/components/ProjectCard";
import { NextRouter, useRouter } from "next/router";
import Img from "next/image";
import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "store/ThemeContext";
// import { useCycle } from "framer-motion";
// import { motion } from "framer-motion";
// import { useKeenSlider } from "keen-slider/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import projectsData from "../../data/projectsData";

// TODO:remove it
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

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
        <div className={`flex flex-col items-start bg-[url('/static/images/bg-project-${theme}.svg')]`}>
          <div className="">
            <div className="text-5xl font-bold my-2 ">{currentProject.title}</div>
            <div className="text-lg my-2 font-thin italic text-secondary ">{currentProject.tagLine}</div>
            <div className="text-sm my-2 lg:w-[60%] ">
              {currentProject.description.split("//").map((line, index) => (
                <div key={index} className="my-2">
                  {line}
                </div>
              ))}
            </div>

            <div className="divider"></div>

            <div className="text-lg font-bold">Stack</div>
            <div className="flex flex-wrap">
              {currentProject.techStack.map((techName, index) => {
                return (
                  <div key={index}>
                    <div className="badge badge-info  badge-lg rounded-sm  m-1 ">{techName}</div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 mx-1">
              <a href={currentProject.view as string} target="_blank" rel="noreferrer">
                <div className="badge badge-ghost  badge-md rounded-sm  p-2 ">
                  <FontAwesomeIcon icon={faLink as IconProp} className="mx-1" />
                  Web
                </div>
              </a>

              <a
                href={currentProject.sourceCode ? (currentProject.sourceCode as string) : "#"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={`badge badge-ghost  badge-md rounded-sm  p-2 mx-1 ${
                    currentProject.sourceCode === false && "text-gray-400"
                  }`}
                >
                  <FontAwesomeIcon icon={faCode as IconProp} className="mx-1" />
                  Code
                </div>
              </a>
            </div>
          </div>
          {/* <div className="w-full mt-5 grid grid-cols-3 gap-2  grid-flow-row  "> */}
          <div className="w-full mt-5 grid grid-cols-3 gap-2  grid-flow-row">
            <Gallery>
              {currentProject.images.map((img, index) => {
                return (
                  <div key={index} className="mt-5">
                    {/* <Item original={`${img}-${theme}.png`} thumbnail={`${img}-${theme}.png`} width="1024" height="768"> */}
                    <Item original={`${img}`} thumbnail={`${img}`} width="1024" height="768">
                      {/*//@ts-ignore */}
                      {({ ref, open }) => <img ref={ref} onClick={open} src={`${img}`} />}
                    </Item>
                  </div>
                );
              })}
            </Gallery>
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
}
