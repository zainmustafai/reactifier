import { MenuOutlined, SettingFilled } from "@ant-design/icons";
import RoutesContainer from "./RoutesContainer";
import Sidenav from "./components/Sidenav/Sidenav";
import { useState } from "react";
import { useTheme } from "./ThemeContext";
import ThemeSwitchIcon from "./components/ThemeSwitchIcon/ThemeSwitchIcon";

function App() {
  // ------------------------------------------------------------
  const [showNav, setShowNav] = useState(false);
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex bg-light   ${isDarkMode ? "dark" : "light"}`}>
      <section>
        {/* SETTINGS ROTATING GEAR */}
        <button
          className="fixed top-[45%] right-0 z-50"
          onClick={() => setShowThemeSelector(!showThemeSelector)}
        >
          <RotatingGear className="" />
        </button>
        {/* TOGGLER BUTTON */}
        <div
          className={`p-2 bg-primary fixed z-[100] bg-opacity-80 top-[55%] transition-all duration-300 delay-75 ease-linear flex gap-2 items-center ${
            showThemeSelector ? "-right-52" : "right-0"
          } `}
        >
          <ThemeSwitchIcon isDark={isDarkMode ? true : false} />
          <ToggleSwitch />
        </div>
      </section>
      {/* SIDE NAVIGATION */}
      {/* NAV ELEMENT */}
      <nav
        className={`h-[100vh] max-h-[100vh] overflow-auto border-r w-[300px] md:static dark:border-r-darkGray  ${
          showNav ? "absolute z-[100] left-0 w-[250px]" : "fixed -left-full"
        } bg-white relative z-50 dark:bg-black transition-all duration-300 ease-in-out `}
      >
        <Sidenav />
      </nav>
      <button
        className="fixed top-8 right-8 aspect-square ripple-container z-20 "
        onClick={() => setShowNav(!showNav)}
      >
        <MenuOutlined className="text-2xl md:hidden p-2 text-dark dark:text-white " />
      </button>

      <main className=" relative z-10 h-[100vh] max-h-[100vh] overflow-y-auto w-full px-8 md:px-12 pb-16 overflow-hidden text-dark dark:text-white transition-all dark:bg-dark duration-500">
        <RoutesContainer />
      </main>
      
    </div>
  );
}

export default App;

const RotatingGear = () => {
  return (
    <div className="bg-primary w-10 aspect-square flex items-center">
      <SettingFilled className="text-2xl animate-spin w-10 textl-2xl flex items-center justify-center" />
    </div>
  );
};

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
