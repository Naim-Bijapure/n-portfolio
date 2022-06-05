/** @format */

import Img from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({
  title,
  description,
  techStack,
  thumbnailImg,
}: {
  title: string;
  description: string;
  techStack: string[];
  thumbnailImg: string;
}) => {
  return (
    <>
      <div className="card  shadow-md  mt-5  md:mt-0 md:w-[95%] md:card-bordered hover:shadow-md hover:scale-105 transform transition duration-100  ">
        <figure>
          <Img src={`/static/images/projects/project_1-${"light"}.png`} width={300} height={200} />
        </figure>

        <div className="card-body">
          {/* <h2 className="card-title text-2xl  ">Smart manufacturing dashboard</h2> */}
          <h2 className="card-title text-neutral text-opacity-80 mt-1">{title}</h2>
          <div className="tags">
            {/* <span className="badge badge-primary badge-outline badge-sm rounded-sm m-1  ">react</span>
            <span className="badge badge-primary badge-outline badge-sm rounded-sm m-1">node</span>
            <span className="badge badge-primary badge-outline badge-sm rounded-sm m-1">python</span> */}
            {techStack.map((techName, index) => {
              return (
                <>
                  <span key={index} className="badge badge-primary badge-outline badge-sm rounded-sm m-1  ">
                    {techName}
                  </span>
                </>
              );
            })}
          </div>
          <p className="font-medium text-neutral text-opacity-60">{description.slice(0, 250).replace("//", "")} ...</p>

          <div className="card-actions justify-start text-primary mt--5">
            <Link passHref href={`/project/${title.split(" ").join("-")}`}>
              {/* <button className="btn btn-primary">View</button> */}
              {"Learn more -->"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;
