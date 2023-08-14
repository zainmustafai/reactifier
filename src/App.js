import React, { useState } from "react";
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

  return (
    <div
      className={`flex justify-self-stretch bg-light ${
        isDarkMode ? "dark" : "light"
      }`}
    >
      <CustomCursor />
      <ScrollToTop />
      {/* Theme Selector */}
      <section>
        <button
          className="fixed top-[45%] right-0 z-50"
          onClick={() => setShowThemeSelector(!showThemeSelector)}
        >
          <RotatingGear />
        </button>
        <div
          className={`p-2 bg-primary fixed z-[100] bg-opacity-80 top-[55%] transition-all duration-300 delay-75 ease-linear flex gap-2 items-center ${
            showThemeSelector ? "-right-52" : "right-0"
          } `}
        >
          <ThemeSwitchIcon isDark={isDarkMode ? true : false} />
          <ToggleSwitch />
        </div>
      </section>

      {/* Side Navigation */}
      <section
        className={`h-[100vh] max-h-[100vh] relative z-[1234]  overflow-y-auto  border-lightGray dark:border-darkBlue border-r-[2px] w-[0]  lg:w-[300px] lg:static dark:border-r-darkGray  bg-white dark:bg-black transition-all duration-300 ease-in-out `}
      >
        <Sidenav />
      </section>
      {/* SMALL SCREEN SIDE NAVIGATION  */}
      {
        <section
          className={`fixed z-[1234] lg:hidden  ${
            showNav ? "top-0 left-0 " : "top-0 -left-full"
          } h-[100vh] max-h-[100vh] w-[250px]  overflow-y-auto  border-lightGray dark:border-darkBlue border-r-[2px] dark:border-r-darkGray  bg-white dark:bg-black transition-all duration-300 ease-in-out`}
        >
          <Sidenav />
        </section>
      }

      {/* NAVBAR Toggle Button */}
      <button
        className="fixed top-8 right-8 aspect-square z-20 p-1 lg:hidden bg-white bg-opacity-25 dark:bg-black dark:bg-opacity-25 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out rounded-xl hover:shadow-sm active:scale-90"
        onClick={() => setShowNav(!showNav)}
      >
        <MenuOutlined className="text-2xl p-2 text-dark dark:text-white " />
      </button>

      {/* Main Content */}
      <main className=" relative z-10 h-[100vh] max-h-[100vh] overflow-y-auto w-full px-8 md:px-12 pb-16 overflow-hidden text-dark dark:text-white transition-all dark:bg-dark duration-500">
        <RoutesContainer />
      </main>
    </div>
  );
}

export default App;

// Component for Rotating Gear
const RotatingGear = () => {
  return (
    <div className="bg-primary w-10 aspect-square flex items-center">
      <SettingFilled className="text-2xl animate-spin w-10 textl-2xl flex items-center justify-center" />
    </div>
  );
};

// Component for Theme Toggle Switch
const ToggleSwitch = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-200 dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-light"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
    </label>
  );
};
