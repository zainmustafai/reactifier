import {
  FacebookFilled,
  LinkedinFilled,
  InstagramFilled,
  TwitterSquareFilled,
  GithubFilled,
} from "@ant-design/icons";
import projectCoverImage from "./images/portfolio_project_cover.png";
import blogCoverImage from "./images/blog-cover.png";

export const portfolioProjects = [
  {
    id: 1,
    title: "React Project 1",
    category: "React",
    description: "This is a React project description",
    image: projectCoverImage,
    link: "https://www.google.com/",
  },
  {
    id: 2,
    title: "React Project 2",
    category: "React",
    description: "This is another React project description",
    image: projectCoverImage,
    link: "https://www.google.com/",
  },
  {
    id: 3,
    title: "Node.js Project 1",
    category: "Nodejs",
    description: "This is a Node.js project description",
    image: projectCoverImage,
    link: "https://www.google.com/",
  },
  {
    id: 4,
    title: "React Native Project 1",
    category: "React Native",
    description: "This is a React Native project description",
    image: projectCoverImage,
    link: "https://www.google.com/",
  },
  {
    id: 5,
    title: "Ecommerce Project 1",
    category: "Ecommerce",
    description: "This is an Ecommerce project description",
    image: projectCoverImage,
    link: "https://www.google.com/",
  },
  // Add more projects here...
  {
    id: 6,
    title: "React Project 3",
    category: "React",
    description: "Another React project description",
    image: projectCoverImage,
    link: "https://www.google.com/",
  },
  {
    id: 7,
    title: "Node.js Project 2",
    category: "Nodejs",
    description: "Another Node.js project description",
    image: projectCoverImage,
    link: "https://www.google.com/",
  },
  {
    id: 8,
    title: "React Native Project 2",
    category: "React Native",
    description: "Another React Native project description",
    image: projectCoverImage,
    link: "https://www.google.com/",
  },
  {
    id: 9,
    title: "Ecommerce Project 2",
    category: "Ecommerce",
    description: "Another Ecommerce project description",
    image: projectCoverImage,
    link: "https://www.google.com/",
  },
  {
    id: 10,
    title: "Node.js Project 3",
    category: "Nodejs",
    description: "Yet another Node.js project description",
    image: projectCoverImage,
    link: "https://www.google.com/",
  },
  {
    id: 11,
    title: "React Project 4",
    category: "React",
    description: "Yet another React project description",
    image: projectCoverImage,
    link: "https://www.google.com/",
  },
  {
    id: 12,
    title: "React Native Project 3",
    category: "React Native",
    description: "Yet another React Native project description",
    image: projectCoverImage,
    link: "https://www.google.com/",
  },
  {
    id: 13,
    title: "Ecommerce Project 3",
    category: "Ecommerce",
    description: "Yet another Ecommerce project description",
    image: projectCoverImage,
    link: "https://www.google.com/",
  },
];

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
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Services", link: "/services" },
  { id: 4, name: "Resume", link: "/resume" },
  { id: 5, name: "Portfolio", link: "/portfolio" },
  { id: 6, name: "Blog", link: "/blog" },
  { id: 7, name: "Contact", link: "/contact" },
];

export const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    icon: <FacebookFilled />,
    link: "https://www.facebook.com/",
  },
  {
    id: 2,
    name: "Instagram",
    icon: <InstagramFilled />,
    link: "https://www.instagram.com/",
  },
  {
    id: 3,
    name: "Twitter",
    icon: <TwitterSquareFilled />,
    link: "https://twitter.com/",
  },
  {
    id: 4,
    name: "Linkedin",
    icon: <LinkedinFilled />,
    link: "https://www.linkedin.com/",
  },
  {
    id: 5,
    name: "Github",
    icon: <GithubFilled />,
    link: "https://www.github.com/",
  },
];

export const HomePageData = {
  title: "Hello I'm ",
  name: "Zain Ul Abidin.",
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
  freelanceLink: "https://www.google.com/",
};

export const Services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "I have experience in developing websites using React, Next, Gatsby, HTML, CSS, JavaScript, Bootstrap, Tailwind, Material UI, Ant Design, Styled Components, and many more.",
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
  {
    id: 4,
    title: "Mobile App Development",
    description:
      "I have experience in developing mobile apps using Flutter, React Native, and many more.",
    icon: "📱", // Add an appropriate icon
    color: "bg-quaternary", // Choose a color class from your styles
  },
  {
    id: 5,
    title: "Fully Responsive",
    description: "I can make your website fully responsive for all devices.",
    icon: "📱", // Add an appropriate icon
  },
  {
    id: 6,
    title: "Cross Browser Compatible",
    description: "I can make your website cross browser compatible.",
    icon: "📱", // Add an appropriate icon
  },
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
  },
  {
    id: 3,
    title: "Logo Designer",
    institute: "Fiverr.com",
    duration: "2019 - Present",
  },
];
