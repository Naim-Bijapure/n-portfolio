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

export type projectType = {
  name?: string;
  title: string;
  tagLine: string;
  type: string;
  description: string;
  // work: string;
  // tech: { front: string[]; back: string[] };
  techStack: string[];
  images: string[];
  view: string | boolean;
  sourceCode: string | boolean;
  demo: string | boolean;
};

const projectsData: projectType[] = [
  {
    title: "vDigiDocr (OCR)",
    tagLine: "An AI powered invoice data extraction tool",
    type: "work",
    description: `
    vDigiDocr is a computer vision, OCR-based data extraction tool which is a product developed under vInnvoate   technologies.//
    It automates the data extraction process from various digital documents such as  invoices, PO's and saves the time of manual data entry.// 
    It  is based on a  machine learning model which automatically detects data points from digital documents and stores them in different formats like in DB,JSON files etc. //
    It can be used as an API service or it can be connected with any 3rd party ERP, RPA services.//


    `,
    //     work: `On this project worked as a team lead developer and configured project architecture from scratch.//
    //            I worked as a bridge between the python data science team and a web tear team.//
    //            On the web tier, we used reactjs,nodejs, and MongoDB.//
    //            On the data science tier, we used python, tesseract for OCR, and YOLO v3 for machine learning.//
    //            For this project have applied the mono repo style architecture to manage multiple front end, back end, and python project builds using a tool called NX.//
    //            The main challenge in this project is to display the predicted data points from a machine learning model on UI.//
    //            As there are no picture annotation solutions available per our requirement so I tweaked an annotation library and modified it as per our need.//
    //            As OCR tools primarily work with images we are converting pdf files to png's using a tool called Ghostscript through nodejs.//
    //            In this project we process python scripts through nodejs For that, I used different async nodejs child process features to execute python files.//
    //            Implemented websocket with  sockeIO  for real-time  notification and status updates on client-side.//
    //            I guided the web tier team to implement other content display and user management screens like output viewer, batch process screen. //
    //            Configured and deployed this software on AWS.//
    //            Also configured bitbucket ci/cd pipeline to release new deployment on client-server.//
    //            Applied  Obfuscation techniques to encrypt the back-end code on the client-server.//
    //            Apart from this. I tried to follow all coding best practices :).
    // `,
    techStack: ["Reactjs", "Mobx", "Nodejs", "Python", "Docker"],
    images: [
      "/static/images/projects/vdigi-3.png",
      "/static/images/projects/vdigi-1.png",
      "/static/images/projects/vdigi-2.png",
      "/static/images/projects/vdigi-4.png",
    ],
    view: "https://vinnovatetechnologies.com/digidocr.php",
    sourceCode: false,
    demo: "/static/images/projects/N.gif",
  },
  {
    title: "CV MAN",
    tagLine: "smart CV management tool with AI",
    type: "work",
    description: `
cvman is an ocr based CV management tool made for recruiters to effectively manage   CV's. //
 we developed this software for an Italy based client.//
it process thousands of different types of CV's, extract meaningful data and store into database.//
with the help of AI cvman automatically  detects the usable data points from different CV's and eliminates the manual data insertion.//
cvman provides a complete recruit  management system  where a recruiter can sort,search multiple candidates data and contact them through email. //
    `,
    //     work: `On this project worked as a team lead developer and configured project architecture from scratch.//
    //            I worked as a bridge between the python data science team and a web tear team.//
    //            On the web tier, we used reactjs,nodejs, and MongoDB.//
    //            On the data science tier, we used python, tesseract for OCR, and YOLO v3 for machine learning.//
    //            For this project have applied the mono repo style architecture to manage multiple front end, back end, and python project builds using a tool called NX.//
    //            The main challenge in this project is to display the predicted data points from a machine learning model on UI.//
    //            As there are no picture annotation solutions available per our requirement so I tweaked an annotation library and modified it as per our need.//
    //            As OCR tools primarily work with images we are converting pdf files to png's using a tool called Ghostscript through nodejs.//
    //            In this project we process python scripts through nodejs For that, I used different async nodejs child process features to execute python files.//
    //            Implemented websocket with  sockeIO  for real-time  notification and status updates on client-side.//
    //            I guided the web tier team to implement other content display and user management screens like output viewer, batch process screen. //
    //            Configured and deployed this software on AWS.//
    //            Also configured bitbucket ci/cd pipeline to release new deployment on client-server.//
    //            Applied  Obfuscation techniques to encrypt the back-end code on the client-server.//
    //            Apart from this. I tried to follow all coding best practices :).
    // `,
    techStack: ["Reactjs", "Mobx", "Nodejs", "Python", "Docker"],
    images: [
      "/static/images/projects/project_1",
      "/static/images/projects/project_1",
      "/static/images/projects/project_1",
      "/static/images/projects/project_1",
      "/static/images/projects/project_1",
      "/static/images/projects/project_1",
    ],
    view: "https://vinnovatetechnologies.com/digidocr.php",
    sourceCode: false,
    demo: "/static/images/projects/N.gif",
  },
];

export default projectsData;
