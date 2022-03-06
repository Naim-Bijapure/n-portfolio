/** @format */

import Img from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <>
      <div className="m-3  card  glass  image-full    |   hover:scale-105 lg:card-side transform transition duration-100 ">
        <div className="blur-sm">
          <Img src={`/static/images/projects/project_1-${"light"}.png`} width={500} height={225} />
        </div>

        <div className="card-body  ">
          {/* <h2 className="card-title text-2xl  ">Smart manufacturing dashboard</h2> */}
          <h2 className="card-title text-2xl opacity-90">{title}</h2>
          <p className="opacity-80 font-medium">{description.slice(0, 250)} ...</p>
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
