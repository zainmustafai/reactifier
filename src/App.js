import React, { useRef, useState } from "react";
import { MenuOutlined, SettingFilled } from "@ant-design/icons";
import RoutesContainer from "./RoutesContainer";
import Sidenav from "./components/Sidenav/Sidenav";
import { useTheme } from "./ThemeContext";
import ThemeSwitchIcon from "./components/ThemeSwitchIcon/ThemeSwitchIcon";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  // State for showing navigation and theme selector
  const [showNav, setShowNav] = useState(false);
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const { isDarkMode } = useTheme();
  const myDivRef = useRef(null);
  const scrollToTop = () => {
    if (myDivRef.current) {
      myDivRef.current.scrollTop = 0; // Scroll to the top of the div
    }
  };

  return (
    <div className={`hide-scrollbar  flex justify-self-stretch bg-light ${isDarkMode ? "dark" : "light"}`} onContextMenu={(e) => { e.preventDefault(); }}>
      <CustomCursor />
      <ScrollToTop />
      {/* Theme Selector */}
      <section>
        <button
          type="button"
          className="fixed  top-[70vh] right-0 z-50"
          onClick={() => setShowThemeSelector(!showThemeSelector)}
        >
          <RotatingGear />
        </button>
        <div
          className={`p-2 rounded-bl-full rounded-tl-full bg-primary fixed top-[60vh] z-[100] bg-opacity-80 transition-all duration-300 delay-75 ease-linear flex gap-2 items-center ${!showThemeSelector ? "-right-52" : "right-0"
            } `}
        >
          <ThemeSwitchIcon isDark={isDarkMode} />
          <ToggleSwitch />
        </div>
      </section>

      {/* Side Navigation */}
      <section
        onKeyUp={(e) => {
          if (e.key === "Escape") {
            setShowNav(false);
          }
        }}
        onClick={() => {
          setShowNav(false);
          scrollToTop();
        }}
        className={"h-[100svh] max-h-[100svh] relative z-[1234]  overflow-y-auto  border-lightGray dark:border-darkBlue border-r-[2px] w-[0]  lg:w-[300px] lg:static dark:border-r-darkGray  bg-white dark:bg-black transition-all duration-300 ease-in-out "}
      >
        <Sidenav />
      </section>
      {/* SMALL SCREEN SIDE NAVIGATION  */}
      {
        <section
          onKeyUp={(e) => {
            if (e.key === "Escape") {
              setShowNav(false);
            }
          }}
          onClick={() => setShowNav(false)}
          className={`fixed z-[1234] lg:hidden  ${showNav ? "top-0 left-0 " : "top-0 -left-full"
            } h-[100vh] max-h-[100vh] w-[250px]  overflow-y-auto  border-lightGray dark:border-darkBlue border-r-[2px] dark:border-r-darkGray  bg-white dark:bg-black transition-all duration-300 ease-in-out`}
        >
          <Sidenav />
        </section>
      }

      {/* NAVBAR Toggle Button */}
      <div
        onKeyUp={(e) => {
          if (e.key === "Escape") {
            setShowNav(false);
          }
        }}
        className="fixed z-20 p-1 transition-all duration-300 ease-in-out bg-white bg-opacity-25 top-8 right-8 aspect-square animate-pulse hover:animate-none lg:hidden dark:bg-black dark:bg-opacity-25 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-xl hover:shadow-sm active:scale-90"
        onClick={() => setShowNav(!showNav)}
      >
        <MenuOutlined className="p-2 text-2xl text-dark dark:text-white " />
      </div>

      {/* Main Content */}
      <main
        ref={myDivRef}
        className=" relative z-10 h-[100vh] max-h-[100vh] overflow-y-auto w-full px-8 md:px-12 pb-16 overflow-hidden text-dark dark:text-white transition-all dark:bg-dark duration-500"
      >
        <RoutesContainer />
      </main>
    </div>
  );
}

export default App;
// Component for Rotating Gear
const RotatingGear = () => {
  return (
    <div className="flex items-center w-10 rounded-tl-full rounded-bl-full bg-primary aspect-square">
      <SettingFilled className="flex items-center justify-center w-10 text-2xl animate-spin textl-2xl" />

    </div>
  );
};

// Component for Theme Toggle Switch
const ToggleSwitch = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-200 dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white
       after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full
        after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-light"/>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"/>
    </div>
  );
};
