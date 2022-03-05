/** @format */

import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import { useIsPresent } from "framer-motion";
import Img from "next/image";
import LayoutWrapper from "../components/LayoutWrapper";
import Link from "@/components/Link";
import ProjectCard from "@/components/ProjectCard";

const Home = () => {
  const isPresent = useIsPresent();
  let arr = [1, 2, 3];

  return (
    <LayoutWrapper>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      {/* main home */}
      <div className="prose-2xl   w-full  bg-cover bg-[url('/static/images/background-mb-3.svg')] lg:prose-h1:h-32	lg:h-max  lg:bg-cover lg:bg-[url('/static/images/background12.svg')]  ">
        <h3 className="text-primary">Hi, I'm Naim</h3>
        <h1 className=" w-full text-primary  font-extrabold text-4xl lg:text-8xl">I build things with code & coffee</h1>
        <div className=" text-gray-500 text-xl sm:w-[60%]">
          I'm a self taught full stack web developer based in pune, India. passionate about building exceptional,
          high-quality web and mobile apps.
        </div>

        <div className="my-10">
          <Link href={"/about"}>
            <button className="btn btn-primary">About</button>
          </Link>
        </div>
      </div>
      {/* projects list */}
      {/* projects header */}
      <div className="my-10">
        <div className="flex w-full justify-center items-center">
          <div className="text-primary w-[70%] font-bold text-2xl lg:text-4xl lg:w-1/2">Some things i built</div>
          <div className="  w-[30%]  divider lg:w-full" />
        </div>
      </div>
      {/* <div className="card  lg:card-side bg-base-100 shadow-lg">
        <Img className="w-full h-full" src="https://api.lorem.space/image/album" alt="Album" width={500} height={400} />{" "}
        <div className="card-body ">
          <h2 className="card-title text-2xl">New album is released!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nostrum sit ullam amet nobis temporibus
            officia sunt ducimus alias animi earum eveniet esse, cumque at odit expedita repellat. Est, sed!
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div> */}

      {/* project card */}

      <div>
        <div className="flex flex-col">
          {arr.map((id) => {
            return <ProjectCard key={id} />;
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
