/** @format */

import Link from "@/components/Link";
import ProjectCard from "@/components/ProjectCard";
import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import { useIsPresent } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee, faUser } from "@fortawesome/free-solid-svg-icons";
// import { faSuperpowers } from "@fortawesome/free-brands-svg-icons";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import moment from "moment";

import Img from "next/image";

import LayoutWrapper from "../components/LayoutWrapper";
import projectsData from "../data/projectsData";
import Hero from "../components/Hero";
import SocialIcon from "@/components/social-icons";
import { useEffect, useState } from "react";

const Home = () => {
  const isPresent = useIsPresent();
  const [show, setShow] = useState(false);

  let experienceYear = Math.round(moment().diff(moment([2019, 5]), "year", true));
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  return (
    <LayoutWrapper>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <div className="bd--red flex flex-col justify-center items-start absolute top-[40%] left-0 right-0 m-5 lg:left-[15%] lg:top-[30%] ">
        <div className="text-3xl n-heading-font m-1 text-neutral">
          Hi, I am Naim <span className="wave">👋</span>
        </div>
        <div className="m-1 text-xl text-neutral  ">Software engineer</div>
        <div className="m-1 text-secondary  italic">
          <RoughNotation type="box" color="black" show={show}>
            currently transitioning to web3
          </RoughNotation>
        </div>
        <div className="m-1 mt-2  ">
          <span>Read more</span>

          <Link key={"about_me"} href={"/about"}>
            <span className="mx-2">
              <RoughNotation type="highlight" color="#c9f3ff" show={show} padding={10}>
                about me
              </RoughNotation>
            </span>
          </Link>
        </div>
      </div>
      {/* <Hero welcome="cool man" /> */}

      {/* OLD HOME */}
      {/* main home */}
      {/* <div className="relative -prose-2xl w-full    bg-cover -bg-[url('/static/images/background-mb.svg')] 	lg:h-max  lg:bg-cover lg:-bg-[url('/static/images/background.svg')]  ">

        <div className="flex items-center">
          <div className="avatar">
            <div className="w-28   rounded-full">
              <Img src="/static/images/N.jpg" width={400} height={500} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-neutral text-opacity-90 md:text-4xl n-heading-font mx-5 ">
            Hi, I'm <span className="text-primary">Naim</span> <span className="wave">👋</span>
          </h3>
        </div>

        <h3 className="font-bold text-neutral    n-heading-font text-4xl  lg:text-7xl mt-5 ">
          A full stack web developer
        </h3>
        <div className="text-xl font-medium text-neutral -text-opacity-95 w-[90%]   lg:w-full mt-10  ">
          <div>
            <div className="my-1">I'm a javascript enthusiast with {experienceYear}yrs of experience in</div>
            <div className="my-1">
              <span className="text-accent">Reactjs,Vuejs,Nodejs,Linux,AWS, Devops tools</span> and many more.
            </div>
          </div>
          <div className="mt-4">
            Currently building and leading awesome products at
            <div className="text-primary underline">
              <a href={"https://naim-web.dev"} target="_blank" rel="noreferrer">
                @vinnovate technologies
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <div className="flex mb-3 space-x-4">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          </div>
        </div>

        <div className="my-5">
          <Link href={"/about"}>
            <button className="btn btn-primary">About me</button>
          </Link>
        </div>
      </div> */}

      {/* projects list */}
      {/* <div className="my-10 ">
        <div className="flex w-full justify-center items-center ">
          <div className="w-[70%] text-neutral  text-opacity-90 font-bold text-2xl lg:text-4xl lg:w-1/2">
            Some things i built
          </div>
          <div className="w-[30%]  divider lg:w-full" />
        </div>
      </div> */}

      {/* project card */}

      {/* <div>
        <div className="flex flex-col">
          {projectsData
            .filter((obj) => obj.type === "work")
            .slice(0, 3)
            .map((obj, index) => {
              return <ProjectCard key={index} title={obj.title} description={obj.description} />;
            })}
        </div>
      </div> */}

      {/* <div className="my-5">
        <Link href={"/projects"}>
          <button className="btn btn-primary">All Projects</button>
        </Link>
      </div>

      <div className="my-10 ">
        <div className="flex w-full justify-center items-center ">
          <div className="w-[70%] text-neutral  text-opacity-90 font-bold text-2xl lg:text-4xl lg:w-1/2">Articles</div>
          <div className="w-[30%]  divider lg:w-full" />
        </div>
      </div> */}
    </LayoutWrapper>
  );
};
export default Home;
