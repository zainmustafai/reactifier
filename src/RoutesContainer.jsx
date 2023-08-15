import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ResumePage from "./pages/ResumePage/ResumePage";
// import BlogPage from "./pages/BlogPage/BlogPage";
import ContactPage from "./pages/ContactPage/ContactPage";

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="resume" element={<ResumePage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      {/* <Route path="/blog" element={<BlogPage />} /> */}
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default RoutesContainer;
