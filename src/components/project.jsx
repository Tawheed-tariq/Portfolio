import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css"

export default function Project({
  title,
  desc,
  img,
  skillArr,
  giturl,
  weburl,
  deployed,
}) {
  const [showPopup, setShowPopup] = useState(false);

  const nameShortner = (string, maxlength) => {
    if (string.length > maxlength)
      return string.substring(0, maxlength) + "...";
  };

  const handleClick = () => {
    setShowPopup((prev) => !prev);
  };

  useEffect(()=>{
    Aos.init({duration:900, anchorPlacement:"top-center"})
},[])

  return (
    <>
      <div data-aos="zoom-in" className={`shadow rounded-md max-w-96 p-6 `} onClick={handleClick}>
        <ProjectCard
          img={img}
          title={title}
          desc={nameShortner(desc, 100)}
          skillArr={skillArr}
        />
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center z-[999] justify-center bg-gray-800 bg-opacity-75">
          <div
            className="bg-white p-8 max-w-[1100px] rounded-lg"
          >
            <div className="flex px-3 justify-end">
              <img onClick={handleClick} className="w-7 h-7 cursor-pointer" src="cross.svg" alt="close" />
            </div>
            <ProjectCard
              img={img}
              title={title}
              desc={desc}
              skillArr={skillArr}
            />
            <div className="flex pt-5 px-3 justify-end gap-6">
              <GithubBtn GithubUrl={giturl} />
              {deployed && <BrowserBtn BrowserUrl={weburl} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const ProjectCard = ({ img, title, desc, skillArr }) => {
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex items-center gap-5">
        <img src={img} className={`w-10 h-10 `} />
        <h1 className={`text-xl md:text-2xl font-semibold text-txt`}>
          {title}
        </h1>
      </div>
      <p className={`text-sm md:text-base mb-3 text-txt`}>{desc}</p>

      <div className={`flex flex-wrap gap-2 md:mx-1`}>
        {skillArr.map((skill) => (
          <Icon skill={skill} />
        ))}
      </div>
    </div>
  );
};

const BrowserBtn = ({ BrowserUrl }) => {
  return (
    <a target="_blank" href={BrowserUrl}>
      <div className="group relative">
        <button>
          <svg
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
          >
            <path d="M3 12H21M3 12C3 16.9706 7.02944 21 12 21M3 12C3 7.02944 7.02944 3 12 3M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M12 21C4.75561 13.08 8.98151 5.7 12 3M12 21C19.2444 13.08 15.0185 5.7 12 3" />
          </svg>
        </button>
        <span
          className="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
        >
          Web View<span></span>
        </span>
      </div>
    </a>
  );
};

const GithubBtn = ({ GithubUrl }) => {
  return (
    <a target="_blank" href={GithubUrl}>
      <div className="group relative">
        <button>
          <svg
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </button>
        <span
          className="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
        >
          GitHub<span></span>
        </span>
      </div>
    </a>
  );
};

const Icon = ({ skill }) => {
  return (
    <div
      className={`flex h-6 md:h-9 shadow-lg rounded-full items-center justify-between px-3 md:px-5`}
    >
      <p className="text-txt text-[10px] sm:text-xs md:text-sm">{skill}</p>
    </div>
  );
};
