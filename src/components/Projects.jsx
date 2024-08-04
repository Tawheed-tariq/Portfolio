import { useEffect, useState } from "react";
import { projects } from "../constants/index";
import Project from "./project";
export default function Projects() {
  return (
    <div
      id="project"
      className={`w-full flex flex-col justify-center px-[20px] lg:px-[150px]`}
    >
      <h1 className={`text-2xl text-center mb-[20px]  font-bold md:text-3xl`}>
        <span className="heading">Projects</span>
      </h1>
        <ItemList items={projects} />
    </div>
  );
}

const ItemList = ({ items }) => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this value as needed
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleItems = showAll ? items : items.slice(0, isMobile ? 3 : 6);

  return (
    <>
      <div className="w-full flex flex-wrap gap-6 justify-center">
      {visibleItems.map((item) => (
        <Project
          key={item.id}
          title={item.title}
          desc={item.desc}
          img={item.img}
          skillArr={item.skills_used}
          giturl={item.giturl}
          weburl={item.deployed ? item.weburl : null}
          deployed={item.deployed}
        />
      ))}
      </div>
      <div className="w-full flex items-center py-5 justify-center">
        {items.length > (isMobile ? 3 : 6) && (
            <button className="mt-4 px-4 py-2 linearBG text-white font-semibold rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "Show All"}
            </button>
        )}
      </div>
    </>
  );
};
