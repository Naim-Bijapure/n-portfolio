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
            <div className="text-5xl font-bold my-2">vDigi Docr</div>
            <div className="text-lg my-2 font-thin italic ">a first impression tag line</div>
            <div className="text-sm my-2 lg:w-[60%] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deserunt, quibusdam id, tempore unde
              expedita recusandae ut laboriosam repellendus soluta, eaque illum voluptatum eligendi ipsum eum itaque
              quasi quis animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deserunt, quibusdam id,
              tempore unde expedita recusandae ut laboriosam repellendus soluta, eaque illum voluptatum eligendi ipsum
              eum itaque quasi quis animi!
            </div>

            <div className="text-lg font-bold">Stack</div>
            <div className="flex ">
              <div className="badge badge-primary  badge-lg rounded-sm">Reactjs</div>
              <div className="badge badge-primary ml-2 badge-lg rounded-sm ">Node</div>
              <div className="badge badge-primary ml-2 badge-lg rounded-sm ">Python</div>
            </div>

            <div className="mt-5">
              <div className="badge badge-primary  badge-sm rounded-sm bg-black text-white">
                Web
                <FontAwesomeIcon icon={faLink as IconProp} />
              </div>

              <div className="badge badge-primary  badge-sm rounded-sm bg-black mx-2  text-white">
                Code
                <FontAwesomeIcon icon={faCode as IconProp} />
              </div>
            </div>
          </div>
          {/* <div className="w-full mt-5 grid grid-cols-3 gap-2  grid-flow-row  "> */}
          <div className="w-full mt-5 grid grid-cols-3 gap-2  grid-flow-row">
            <Gallery>
              {currentProject.images.map((img, index) => {
                return (
                  <div key={index} className="mt-5">
                    <Item original={`${img}-${theme}.png`} thumbnail={`${img}-${theme}.png`} width="1024" height="768">
                      {/*//@ts-ignore */}
                      {({ ref, open }) => <img ref={ref} onClick={open} src={`${img}-${theme}.png`} />}
                    </Item>
                  </div>
                );
              })}
            </Gallery>
          </div>

          {/* 
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
            <a target={"_blank"} href={currentProject.view as string} rel="noreferrer">
              <button className="mx-2 btn btn-outline btn-primary" disabled={!currentProject.view as boolean}>
                view
              </button>
            </a>
            <button className="mx-2 btn btn-outline btn-primary " disabled={!currentProject.sourceCode as boolean}>
              code
            </button>
          </div>
          <div className="m-5 text-primary text-2xl font-bold n-heading-font ">{currentProject.tagLine}</div>
          <div className="m-5 prose">
            <div className="text-secondary font-semibold text-xl n-heading-font">{currentProject.title}</div>
            <div className="">
              {currentProject.description.split("//").map((line, index) => (
                <div key={index} className="my-3">
                  {line}
                </div>
              ))}
            </div>
          </div>

          <div className="m-5 prose ">
            <div className="text-secondary font-semibold text-xl n-heading-font">Work & Challanges</div>
            <div className="">
              {currentProject.work.split("//").map((line, index) => (
                <div key={index} className="my-3">
                  {line}
                </div>
              ))}
            </div>
          </div>

          <div className="m-5 prose   w-full">
            <div className="text-secondary font-semibold text-xl n-heading-font content-start">Technical Details</div>
            {currentProject.tech["front"].length > 0 && (
              <div className="prose m-2">
                <div className="text-primary n-heading-font">Front-End</div>
                {currentProject.tech["front"].map((value, index) => (
                  <div key={index} className="badge badge-primary badge-outline m-1">
                    {value}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="m-5 prose text-center">
            <div className="text-neutral text-opacity-60 italic">Application demo</div>

            <div className="">
              <Img
                placeholder="blur"
                blurDataURL={`${currentProject.images[0]}-${theme}.png`}
                src={`https://ipfs.io/ipfs/bafybeieepwrvigmcn45qdiohmr4xp2fz7jvoqb5xterzhzdxstdglnaspq/demo.gif`}
                width={900}
                height={530}
                priority
              />
            </div>
          </div> */}
        </div>
      </LayoutWrapper>
    </>
  );
}
