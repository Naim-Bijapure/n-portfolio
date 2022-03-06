/** @format */

// const projectsData = [
//   {
//     title: "A Search Engine",
//     description: `What if you could look up any information in the world? Webpages, images, videos
//     and more. Google has many features to help you find exactly what you're looking
//     for.`,
//     imgSrc: "/static/images/google.png",
//     href: "https://www.google.com",
//   },
//   {
//     title: "The Time Machine",
//     description: `Imagine being able to travel back in time or to the future. Simple turn the knob
//     to the desired date and press "Go". No more worrying about lost keys or
//     forgotten headphones with this simple yet affordable solution.`,
//     imgSrc: "/static/images/time-machine.jpg",
//     href: "/blog/the-time-machine",
//   },
// ];

type projectType = {
  name: string;
  title: string;
  tagLine: string;
  type: string;
  description: string;
  work: string;
  tech: string;
  techList: string[];
  mainImg: string;
  view: string | boolean;
  sourceCode: string | boolean;
  demo: string | boolean;
};

const projectsData: projectType[] = [
  {
    name: "vdigi",
    title: "vdigid asf asf !! asfd ",
    tagLine: "vdigid asf asf !! asfd ",
    type: "work",
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    work: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    tech: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    techList: ["reactjs", "redux", "nodejs"],
    mainImg: "/static/images/projects/project_1",
    view: "/static/images/google.png",
    sourceCode: "/static/images/google.png",
    demo: "/static/images/projects/N.gif",
  },

  {
    name: "vdigi",
    title: "My Project 2",
    tagLine: "vdigid asf asf !! asfd ",
    type: "work",
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quidem fugiat quibusdam placeat impedit illum
            repellat consectetur eius consequuntur, laudantium harum accusantium quia iure numquam ratione. Laborum quis
            ratione omnis.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quidem fugiat quibusdam placeat impedit illum
            repellat consectetur eius consequuntur, laudantium harum accusantium quia iure numquam ratione. Laborum quis
            ratione omnis.
    
    `,
    work: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.  
    
    `,
    tech: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    techList: ["reactjs", "redux", "nodejs"],
    mainImg: "/static/images/google.png",
    view: "/static/images/google.png",
    sourceCode: "/static/images/google.png",
    demo: "/static/images/projects/N.gif",
  },

  {
    name: "vdigi",
    title: "My Project 3",
    tagLine: "vdigid asf asf !! asfd ",
    type: "side",
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    work: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    tech: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    techList: ["reactjs", "redux", "nodejs"],
    mainImg: "/static/images/google.png",
    view: "/static/images/google.png",
    sourceCode: "/static/images/google.png",
    demo: "/static/images/projects/N.gif",
  },
  {
    name: "vdigi",
    title: "My Project 4",
    tagLine: "vdigid asf asf !! asfd ",
    type: "side",
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    work: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    tech: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    techList: ["reactjs", "redux", "nodejs"],
    mainImg: "/static/images/google.png",
    view: "/static/images/google.png",
    sourceCode: "/static/images/google.png",
    demo: "/static/images/projects/N.gif",
  },
];

export default projectsData;
