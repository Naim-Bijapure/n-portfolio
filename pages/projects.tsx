/** @format */

import LayoutWrapper from "@/components/LayoutWrapper";
import ProjectCard from "@/components/ProjectCard";
import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import projectsData from "../data/projectsData";

export default function Projects() {
  const [selectedProjects, setSelectedProjects] = useState("work");
  const [currentProjects, setCurrentProjects] = useState([]);
  useEffect(() => {
    let workProjects = projectsData.filter((obj) => obj.type === "work");
    setCurrentProjects(workProjects);
  }, []);

  const changeProjects = (projectType) => {
    setSelectedProjects(projectType);

    let selectedProjects = projectsData.filter((obj) => obj.type === projectType);

    setCurrentProjects(selectedProjects);
  };

  return (
    <>
      <LayoutWrapper>
        <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
        {/* <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Projects
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Showcase your projects with a hero image (16 x 9)
            </p>
          </div>
          <div className="container py-12">
            <div className="flex flex-wrap -m-4">
              {projectsData.map((d) => (
                <Card key={d.title} title={d.title} description={d.description} imgSrc={d.imgSrc} href={d.href} />
              ))}
            </div>
          </div>
        </div> */}

        <div>
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl n-heading-font text-primary text-opacity-70 font-extrabold leading-9 tracking-tight   sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Projects
            </h1>

            <div className="tabs  flex">
              <a
                className={`tab tab-bordered w-full lg:w-auto  ${
                  selectedProjects === "work" ? "tab-active text--primary  font--bold " : ""
                }`}
                onClick={() => {
                  changeProjects("work");
                }}
              >
                Work Projects
              </a>
              <a
                className={`tab tab-bordered w-full lg:w-auto  ${
                  selectedProjects === "side" ? " tab-active text--primary  font--bold" : ""
                }`}
                onClick={() => {
                  changeProjects("side");
                }}
              >
                Side Projects
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between lg:flex-row">
            {currentProjects.map((obj, index) => {
              return (
                <motion.div
                  key={obj.title}
                  initial="start"
                  animate="end"
                  variants={{
                    start: { opacity: 0, x: -((index + 1) * 200) },
                    end: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.9 }}
                >
                  <ProjectCard title={obj.title} description={obj.description} key={index} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
}
