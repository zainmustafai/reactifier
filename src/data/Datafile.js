import {
  FacebookFilled,
  LinkedinFilled,
  InstagramFilled,
  TwitterSquareFilled,
  GithubFilled,
} from "@ant-design/icons";

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
  }
];
