export const About = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  //topLine: "Not sure where to begin? ",
  headline: "About me",
  description:
    "My name is Grecu Cristian, I'm a 2nd year Computer Science student at University of Bucharest and I love football, music and movies. I discovered that I love programming at the end of 2018 and since then I've been coding and learning new things everyday.",
  buttonLabel: "Education",
  buttonTo: "education",
  imgStart: false,
  img: require("../../images/about.svg").default,
  //alt: "img1",
  dark: true,
  primary: true,
  darkText: false,
};

export const Skills = {
  id: "skills",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  headline: "Skills",
  description: `
  <h2 style="color:#e84118">Programming Languages</h2> 
    <b>Good knowledge:</b> Python &#8226; HTML &#8226; CSS &#8226; JS <br/>
    <b>Meduim knowledge:</b> React &#8226; ASP.NET &#8226; C/C++ &#8226; PL/SQL &#8226; Functional Programming(Haskell) &#8226; Data Structures &#8226; Algorithms <br/>
    <b>Basic knowledge:</b> Java &#8226; OOP &#8226; C# &#8226; Assembly &#8226; R &#8226; Node.js &#8226; Git

  `,
  buttonLabel: "Projects",
  buttonTo: "projects",
  imgStart: true,
  img: require("../../images/skills.svg").default,
  alt: "img1",
  dark: true,
  primary: true,
  darkText: false,
};

export const Projects = {
  id: "projects",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  headline: "Projects",
  description: `
  
  `,
  buttonLabel: "See more",
  buttonRef: "projects",
  imgStart: false,
  img: require("../../images/projects.svg").default,
  //alt: "img1",
  dark: false,
  primary: false,
  darkText: true,
};
