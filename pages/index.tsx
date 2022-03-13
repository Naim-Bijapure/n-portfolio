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

import LayoutWrapper from "../components/LayoutWrapper";
import projectsData from "../data/projectsData";
import Hero from "../components/Hero";

const Home = () => {
  const isPresent = useIsPresent();

  return (
    <LayoutWrapper>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      {/* main home */}
      <div className="relative prose-2xl w-full  bg-cover bg-[url('/static/images/background-mb-1.svg')] lg:prose-h1:h-40	lg:h-max  lg:bg-cover lg:bg-[url('/static/images/background13.svg')]  ">
        {/* <Hero welcome="cool man" /> */}
        <h3 className="text-2xl font-bold text-neutral text-opacity-90 md:text-4xl n-heading-font ">
          Hi, I'm <span className="text-primary text-opacity-90">Naim</span>
        </h3>
        <h1 className="font-bold text-neutral  text-opacity-95  n-heading-font text-4xl  lg:text-8xl sm:text-7xl">
          I build <span className="text-secondary- text-opacity-70- ">things</span> with{" "}
          <span>
            <span className="relative text-base-100 text-opacity-70-">
              <RoughNotation type="highlight" color="#00BBF9" animationDelay={200} show={true}>
                code
              </RoughNotation>{" "}
            </span>
          </span>
          &{" "}
          <span className="hidden lg:inline-block">
            <RoughNotation animationDelay={300} padding={-25} strokeWidth={-9} type="underline" color="red" show={true}>
              <span className="text-brown-">coffee</span>
            </RoughNotation>
          </span>
          {/* to display on mobile */}
          <span className="inline-block lg:hidden">
            <RoughNotation animationDelay={300} padding={0} type="underline" color="red" show={true}>
              <span className="text-brown-">coffee</span>
            </RoughNotation>
          </span>
        </h1>
        <div className="text-xl font-medium text-neutral text-opacity-60   sm:w-[60%]  ">
          I'm a{" "}
          <span className="relative">
            <RoughNotation animationDelay={300} type="underline" color="red" show={true}>
              self taught full stack
            </RoughNotation>{" "}
          </span>
          web developer based in pune, India. Passionate about building exceptional, high-quality web and mobile apps.
        </div>

        <div className="my-8">
          <Link href={"/about"}>
            <button className="btn btn-primary">About me</button>
          </Link>
        </div>
      </div>
      {/* projects list */}
      {/* projects header */}
      <div className="my-10 ">
        <div className="flex w-full justify-center items-center ">
          <div className="w-[70%] text-neutral  text-opacity-70 font-bold text-2xl lg:text-4xl lg:w-1/2">
            Some things i built
          </div>
          <div className="w-[30%]  divider lg:w-full" />
        </div>
      </div>

      {/* project card */}

      <div>
        <div className="flex flex-col">
          {projectsData
            .filter((obj) => obj.type === "work")
            .slice(0, 3)
            .map((obj, index) => {
              return <ProjectCard key={index} title={obj.title} description={obj.description} />;
            })}
        </div>
      </div>

      <div className="my-5">
        <Link href={"/projects"}>
          <button className="btn btn-primary">All Projects</button>
        </Link>
      </div>
    </LayoutWrapper>
  );
};
export default Home;
