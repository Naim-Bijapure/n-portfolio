/** @format */

import Img from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = () => {
  return (
    <>
      <div className="card   lg:card-side bg-base-100 shadow-lg m-3 card-normal transform transition duration-500  hover:scale-105  ">
        <Img
          className="w-[50%] h-full"
          src="https://api.lorem.space/image/album"
          alt="Album"
          width={500}
          height={400}
        />
        <div className="card-body ">
          <h2 className="card-title text-2xl">New album is released!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nostrum sit ullam amet nobis temporibus
            officia sunt ducimus alias animi earum eveniet esse, cumque at odit expedita repellat. Est, sed!
          </p>
          <div className="card-actions justify-end">
            <Link passHref href={"/project/1"}>
              <button className="btn btn-primary">View</button>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="card card-compact  bg-base-100 shadow-0 border-2  transform transition duration-500  hover:scale-105 my-3">
        <figure>
          <Img
            className="w-full h-full"
            src="https://api.lorem.space/image/shoes"
            alt="Album"
            width={400}
            height={200}
          />{" "}
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link passHref href={"/project/1"}>
              <button className="btn btn-primary">View</button>
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default ProjectCard;
