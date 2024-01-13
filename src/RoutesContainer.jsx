import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ResumePage from "./pages/ResumePage/ResumePage";
// import BlogPage from "./pages/BlogPage/BlogPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Main from "./pages/Main";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const RoutesContainer = () => {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/reactifier" />} />
        <Route path="/reactifier" element={<Main />}>
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          {/* <Route path="/blog" element={<BlogPage />} /> */}
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesContainer;
