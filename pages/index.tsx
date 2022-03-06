/** @format */

import Link from "@/components/Link";
import ProjectCard from "@/components/ProjectCard";
import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import { useIsPresent } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee, faUser } from "@fortawesome/free-solid-svg-icons";
// import { faSuperpowers } from "@fortawesome/free-brands-svg-icons";

import LayoutWrapper from "../components/LayoutWrapper";
import projectsData from "../data/projectsData";

const Home = () => {
  const isPresent = useIsPresent();

  return (
    <LayoutWrapper>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      {/* <input type="checkbox" className="toggle focus:ring-0 focus:ring-offset-0 focus:outline-none" /> */}
      {/* <button className="btn">Button</button>
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button</button>
      <button className="btn btn-accent">Button</button>
      <button className="btn btn-ghost">Button</button>
      <button className="btn btn-link">Button</button> */}

      {/* main home */}
      <div className="prose-2xl w-full  bg-cover bg-[url('/static/images/background-mb-3.svg')] lg:prose-h1:h-32	lg:h-max  lg:bg-cover lg:bg-[url('/static/images/background12.svg')]  ">
        <h3 className="text-2xl font-bold text-primary text-opacity-70 md:text-4xl ">Hi, I'm Naim</h3>
        <h1 className=" font-bold text-neutral  text-opacity-80    text-4xl lg:text-8xl">
          I build <span className="text-accent opacity-100">things</span> with{" "}
          <span className="text-primary">code</span> &<span></span> <span className="text-brown">coffee</span>
        </h1>
        <div className="text-xl   font-medium opacity-70  sm:w-[60%]">
          I'm a self taught full stack web developer based in pune, India. passionate about building exceptional,
          high-quality web and mobile apps.
        </div>

        <div className="my-10">
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
