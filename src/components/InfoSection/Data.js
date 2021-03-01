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
    <b>Basic knowledge:</b> Java &#8226; OOP &#8226; C# &#8226; AI &#8226; R &#8226; Node.js &#8226; Git &#8226; Assembly

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
  topLine: "Personal and School Projects",
  headline: "Projects",
  description: `
  In my spare time I like to work on personal projects in order yo develop and expand the array of skills.
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

export const Others = {
  id: "others",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Competitions, Courses and Activities",
  headline: "Others",
  description: `
  <h2 style="color:#e84118">Competitions</h2> 
  <h3> &#8226; Reply code Challenge </h3>
  The Reply Code Challenge is a team-based coding competition open to students and professional coders. We had 4 hours to solve logical mathematical problems by writing an algorithm in any programming language.
  <h2 style="color:#e84118">Online courses</h2> 
  &#8226; Automate the Boring Stuff with Python Programming

  `,
  imgStart: true,
  img: require("../../images/skills.svg").default,
  alt: "img1",
  dark: true,
  primary: true,
  darkText: false,
};

/////////////////////////////////////////////////////////////////////// PROJECTS ////////////////////////////////////////////////

export const Project1 = {
  id: "project",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "ASP.NET",
  headline: "Open Discussion Application",
  description: `
  Co-developed a web application, a “Open discussion” platform. You can create an account, post and comment in the different categories out there.<br/>
  Technologies used: ASP.NET MVC5, Entity Framework, HTML, CSS
  `,
  imgStart: true,
  video: require("../../videos/project1.mp4").default,
  alt: "video",
  darkText: false,
};

export const Project2 = {
  id: "project",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "React",
  headline: "Sorting Algorithms Visualizer",
  description: `
  Built React application for visualizing sorting algorithms such as: Bubble Sort, Quick Sort, Merge Sort.<br/>
  Technologies used: React, JavaScript
  `,
  imgStart: false,
  video: require("../../videos/project1.mp4").default,
  alt: "video",
  darkText: true,
};

export const Project3 = {
  id: "project",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "React",
  headline: "Personal Website",
  description: `
  Developed and deployed a personal websites which contains my portfolio (education, skills, projects and others)<br/>
  Technologies used: React, Node.JS
  `,
  imgStart: true,
  video: require("../../videos/project1.mp4").default,
  alt: "video",
  darkText: false,
};

export const Project4 = {
  id: "project",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Python",
  headline: "TicTacToe Game + AI",
  description: `
  Implemented a TicTacToe Game in python that allows the user play against 3 difficulties(easy, medium, AI) or against another player. <br/>
  The AI is created using the MiniMax algorithm.
  Technologies used: AI, OOP, Pygame
  `,
  imgStart: false,
  video: require("../../videos/project1.mp4").default,
  alt: "video",
  darkText: true,
};
