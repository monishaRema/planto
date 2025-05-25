import React from "react";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

const ToggleTheme = () => {
const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") || "light";
});



useEffect(() => {
  const root = window.document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    root.classList.remove("dark");
    root.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <button onClick={toggleTheme} className="text-2xl" data-tooltip-id="theme-mode-tooltip">
        {theme === "light" ? "🌙" : "☀️"}
      </button>
      <Tooltip id="theme-mode-tooltip" place="bottom" variant="white">
        <div className="bg-[#6A8C25] text-white p-2 rounded-sm">
          <p>Switch to {theme === "dark" ? "light" : "dark"} theme
            </p>
        </div>
      </Tooltip>
    </>
  );
};

export default ToggleTheme;
