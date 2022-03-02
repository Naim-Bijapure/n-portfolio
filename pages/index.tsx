/** @format */

import Link from "@/components/Link";
import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";

const Home = () => {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="p-1 flex flex-col  items-center bg-red rounded-full">
        <div>elemenent 1</div>
        <div className=" dark:text-blue-dark  ">elemenent 2</div>
        <button className="px-5 py-1 text-lg text-purple-600 font-extralight rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Message
        </button>
      </div>

      {/* <div>
        <button className="btn">Button</button>
        <button className="btn btn-primary">Button</button>
        <button className="btn btn-secondary">Button</button>
        <button className="btn btn-accent">Button</button>
        <button className="btn btn-ghost">Button</button>
        <button className="btn btn-link">Button</button>
      </div> */}
      <button data-set-theme="" data-act-class="ACTIVECLASS"></button>
      <button className="btn btn-dark" data-set-theme="dark" data-act-class="ACTIVECLASS">
        dark
      </button>
      <button className="btn btn-primary" data-set-theme="light" data-act-class="ACTIVECLASS">
        light
      </button>
      <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">
        Toggle
      </button>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Default
      </button>
    </>
  );
};
export default Home;
