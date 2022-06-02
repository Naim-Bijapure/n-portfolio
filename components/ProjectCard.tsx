/** @format */

import Img from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <>
      <div className="card border-2 shadow-sm  py-5  md:w-[80%] md:card-compact hover:shadow-md hover:scale-105 transform transition duration-100  ">
        <figure>
          <Img src={`/static/images/projects/project_1-${"light"}.png`} width={300} height={200} />
        </figure>

        <div className="card-body">
          {/* <h2 className="card-title text-2xl  ">Smart manufacturing dashboard</h2> */}
          <h2 className="card-title text-neutral text-opacity-80 mt-1">{title}</h2>
          <div className="tags ">
            <span className="badge badge-secondary badge-outline badge-sm ">react</span>
            <span className="badge badge-secondary badge-outline badge-sm mx-1">node</span>
            <span className="badge badge-secondary badge-outline badge-sm mx-1">python</span>
          </div>
          <p className="font-medium text-neutral text-opacity-60">{description.slice(0, 250)} ...</p>

          <div className="card-actions justify-end text-primary mt-5">
            <Link passHref href={`/project/${title.split(" ").join("-")}`}>
              {/* <button className="btn btn-primary">View</button> */}
              {"Reade more -->"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;
