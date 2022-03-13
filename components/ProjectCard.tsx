/** @format */

import Img from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <>
      <div className="m-3 card    border-2  shadow-lg    | md:w-[100%] md:card-side hover:shadow-xl hover:scale-105 transform transition duration-100 ">
        <div className="my-auto p-2 md:p-0   relative text-center  | md:w-[25%] ">
          <Img src={`/static/images/projects/project_1-${"light"}.png`} width={300} height={200} />
        </div>

        <div className="card-body  | md:w-[75%]">
          {/* <h2 className="card-title text-2xl  ">Smart manufacturing dashboard</h2> */}
          <h2 className="card-title text-primary text-opacity-80">{title}</h2>
          <p className="font-medium text-neutral text-opacity-60">{description.slice(0, 250)} ...</p>
          <div className="card-actions justify-end">
            <Link passHref href={`/project/${title.split(" ").join("-")}`}>
              <button className="btn btn-primary">View</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;
