import React from "react";
import bar from "../assets/light.png";
import dark from "../assets/dark.png";
const Darkmood = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  React.useEffect(() => {
    if (theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <>
      <div className="relative ">
        <img
          src={bar}
          className={`w-16 absolute ${
            theme == "dark" ? "opacity-0" : "opacity-100"
          }`}
          onClick={() => setTheme(theme == "light" ? "dark" : "light")}
        />
        <img
          src={dark}
          className="w-16"
          onClick={() => setTheme(theme == "light" ? "dark" : "light")}
        />
      </div>
    </>
  );
};

export default Darkmood;
