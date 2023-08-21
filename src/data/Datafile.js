import {
  FacebookFilled,
  LinkedinFilled,
  InstagramFilled,
  TwitterSquareFilled,
  GithubFilled,
} from "@ant-design/icons";
import projectCoverImage from "./images/portfolio_project_cover.png";
import blogCoverImage from "./images/blog-cover.png";

export const blogPosts = [
  {
    id: 1,
    title: "Blog Post 1",
    date: "01/01/2021",
    description: "This is a React blog post description",
    image: blogCoverImage,
    link: "https://www.google.com/",
  },
  {
    id: 2,
    title: "Blog Post 2",
    date: "02/15/2021",
    description: "Exploring Node.js and its features",
    image: blogCoverImage,
    link: "https://www.example.com/blog2",
  },
  {
    id: 3,
    title: "Blog Post 3",
    date: "05/10/2021",
    description: "Mastering CSS Grid Layout",
    image: blogCoverImage,
    link: "https://www.example.com/blog3",
  },
  {
    id: 4,
    title: "Blog Post 4",
    date: "07/20/2021",
    description: "Introduction to React Native Development",
    image: blogCoverImage,
    link: "https://www.example.com/blog4",
  },
  {
    id: 5,
    title: "Blog Post 5",
    date: "09/05/2021",
    description: "Building E-commerce Websites with React and Redux",
    image: blogCoverImage,
    link: "https://www.example.com/blog5",
  },
  {
    id: 6,
    title: "Blog Post 6",
    date: "11/30/2021",
    description: "Best Practices for RESTful API Development",
    image: blogCoverImage,
    link: "https://www.example.com/blog6",
  },
  {
    id: 7,
    title: "Blog Post 7",
    date: "02/18/2022",
    description: "Exploring the World of Front-End Frameworks",
    image: blogCoverImage,
    link: "https://www.example.com/blog7",
  },
  {
    id: 8,
    title: "Blog Post 8",
    date: "04/25/2022",
    description: "JavaScript ES6: Modernizing Your Code",
    image: blogCoverImage,
    link: "https://www.example.com/blog8",
  },
  {
    id: 9,
    title: "Blog Post 9",
    date: "06/12/2022",
    description: "Creating Responsive Web Design with CSS Media Queries",
    image: blogCoverImage,
    link: "https://www.example.com/blog9",
  },
  {
    id: 10,
    title: "Blog Post 10",
    date: "08/07/2022",
    description: "Getting Started with Web Accessibility",
    image: blogCoverImage,
    link: "https://www.example.com/blog10",
  },
];

export const navLinks = [
  { id: 1, title: "Home", path: "" },
  { id: 2, title: "About", path: "about" },
  { id: 3, title: "Services", path: "services" },
  { id: 4, title: "Resume", path: "resume" },
  { id: 5, title: "Portfolio", path: "portfolio" },
  // { id: 6, title: "Blog", path: "/blog" },
  { id: 7, title: "Contact", path: "contact" },
];

export const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    icon: <FacebookFilled />,
    link: "https://www.facebook.com/zforzain2000",
  },
  {
    id: 2,
    name: "Instagram",
    icon: <InstagramFilled />,
    link: "https://www.instagram.com/zforzain2000",
  },
  {
    id: 3,
    name: "Twitter",
    icon: <TwitterSquareFilled />,
    link: "https://twitter.com/zforzain2000",
  },
  {
    id: 4,
    name: "Linkedin",
    icon: <LinkedinFilled />,
    link: "https://www.linkedin.com/in/zforzain2000/",
  },
  {
    id: 5,
    name: "Github",
    icon: <GithubFilled />,
    link: "https://www.github.com/zforzain2000/",
  },
];

export const HomePageData = {
  title: "Hello I'm ",
  name: "Muhammad Zain Ul Abidin.",
  description:
    "I am full stack web developer. I have Experience in Developing Websites, Web Applications, Mobile Games (Android & IOS), and Flutter Mobile Applications. We are providing clean code.",
  socialLinks: socialLinks,
};

export const AboutPageData = {
  fullName: "Zain Ul Abidin",
  age: "23",
  title: "Full Stack Web Developer",
  description: `I am full stack web developer. I have Experience in Developing Websites, Web Applications, Mobile Games (Android & IOS), and Flutter Mobile Applications. We are providing clean code.`,
  nationality: "Pakistani",
  languages: "English, Urdu,Punjabi",
  cvLink: "https://www.google.com/",
  freelanceState: "Available",
  freelanceLink: "https://www.fiverr.com/zainmustafai",
};

export const Services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "I have experience in developing websites using React, HTML, CSS, JavaScript, Bootstrap, Tailwind, Material UI, Ant Design, Styled Components, and many more.",
    icon: "💻", // Add an appropriate icon
    color: "bg-primary", // Choose a color class from your styles
  },
  {
    id: 2,
    title: "Database Design",
    description:
      "I have experience in designing databases using MySQL, MongoDB, Firebase, and many more.",
    icon: "🗃️", // Add an appropriate icon
    color: "bg-secondary", // Choose a color class from your styles
  },
  {
    id: 3,
    title: "Restful API Development",
    description:
      "I have experience in developing Restful APIs using Node, Express, and many more.",
    icon: "🚀", // Add an appropriate icon
    color: "bg-tertiary", // Choose a color class from your styles
  },
  // {
  //   id: 4,
  //   title: "Mobile App Development",
  //   description:
  //     "I have experience in developing mobile apps using React Native, and many more.",
  //   icon: "📱", // Add an appropriate icon
  //   color: "bg-quaternary", // Choose a color class from your styles
  // },
  {
    id: 5,
    title: "Fully Responsive",
    description: "I can make your website fully responsive for all devices.",
    icon: "📱", // Add an appropriate icon
  },
  // s
];

export const PricingPlans = [
  {
    id: 1,
    title: "Basic Plan",
    price: "$190",
    features: [
      "Web Development",
      "Database Design",
      "Responsive Design",
      "Limited Support",
    ],
    color: "bg-primary",
    description:
      "Affordable and value-packed basic package to kickstart your project.",
  },
  {
    id: 2,
    title: "Standard Plan",
    price: "$490",
    features: [
      "Web Development",
      "Database Design",
      "Responsive Design",
      "Unlimited Support",
      "API Development",
    ],
    color: "bg-secondary",
    description:
      "Standard package for those who want to take their project to the next level.",
  },
  {
    id: 3,
    title: "Premium Plan",
    price: "$990",
    features: [
      "Web Development",
      "Database Design",
      "Responsive Design",
      "Unlimited Support",
      "API Development",
      "Mobile App Development",
    ],
    color: "bg-tertiary",
    description:
      "Unlock premium benefits and top-tier service with the Premium plan",
  },
];

export const EducationData = [
  {
    id: 1,
    title: "Bachelor of Science in Information Technology",
    institute: "University of Gujrat",
    duration: "2019 - 2023",
    description: "I am currently studying in 8th semester.",
  },
  {
    id: 2,
    title: "Intermediate",
    institute: "M.A Jinnah College Jhelum.",
    duration: "2017 - 2019",
    description: "I have done my intermediate in 2019 with 80% marks.",
  },
  {
    id: 3,
    title: "Matriculation",
    institute: "F.G Boys High School Jhelum Cantt.",
    duration: "2015 - 2017",
    description: "I have done my matriculation in 2017 with 85% marks.",
  },
];

export const ExperienceData = [
  {
    id: 1,
    title: "Full Stack Web Developer",
    institute: "Fiverr.com",
    duration: "2019 - Present",
    description:
      "I have experience in developing websites using React, HTML, CSS, JavaScript and many more.",
  },
  {
    id: 2,
    title: "Full Stack Web Developer",
    institute: "DAR BPO",
    duration: "2023 - Present",
    description:
      "I have experience in developing websites using React, HTML, CSS, JavaScript and many more.",
  },
  {
    id: 3,
    title: "Logo Designer",
    institute: "Fiverr.com",
    duration: "2019 - Present",
    description:
      "I kick started my career as a logo designer. Later on, I started working as a web developer. ",
  },
];

/***-------------------------------------------------- */

export const portfolioProjects = [
  {
    id: 1,
    title: "React Portfolio For a Friend.",
    category: "React",
    description:
      "This  project was my first practice project in React. I learnt a lot from this project.",
    image: projectCoverImage,
    link: "https://www.github.com/zainmustafai",
  },

  {
    id: 2,
    title: "LMS-My Final Year Project",
    category: "React",
    description:
      "GGC LMS is a learning management system for students and teachers. It is a web application developed using React, Node, Express, MongoDB, and many more. ",
    image: projectCoverImage,
    link: "https://www.github.com/zainmustafai",
  },
  {
    id: 3,
    title: "LMS Restful API",
    category: "Nodejs",
    description: "A Restful API for LMS project.",
    image: projectCoverImage,
    link: "https://www.github.com/zainmustafai",
  },
  {
    id: 4,
    title: "LGU- Lahore Garrison University LMS",
    category: "React Native",
    description:
      "A small project for my friend. LGU LMS is a learning management system for students and teachers. It is a mobile application developed using React Native.",
    image: projectCoverImage,
    link: "https://www.github.com/zainmustafai",
  },
  {
    id: 5,
    title: "Ecommerce- Headphone Shop SPA",
    category: "Ecommerce",
    description: "A small ecommerce project for a client.",
    image: projectCoverImage,
    link: "https://www.github.com/zainmustafai",
  },
];
