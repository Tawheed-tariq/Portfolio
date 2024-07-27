import { useState } from "react";

export default function Project({ title, desc, img, skillArr, url }) {
  const [showPopup, setShowPopup] = useState(false);

  const nameShortner = (string, maxlength) => {
    if (string.length > maxlength)
      return string.substring(0, maxlength) + "...";
  };

  const handleClick = () => {
    setShowPopup((prev) => !prev);
  };

  return (
    <>
      <div className={`shadow rounded-md max-w-96 p-6 `} onClick={handleClick}>
        {/* <a target="_blank" href={url}> */}
        <div className="flex flex-col gap-[15px]">
          <div className="flex items-center gap-5">
            <img src={img} className={`w-8 h-8 `} />
            <h1 className={`text-xl md:text-2xl font-semibold text-txt `}>
              {title}
            </h1>
          </div>
          <p className={`text-xs md:text-sm text-txt`}>
            {nameShortner(desc, 100)}
          </p>

          <div className={`flex flex-wrap gap-2 md:mx-1`}>
            {skillArr.map((skill) => (
              <Icon skill={skill} />
            ))}
          </div>
        </div>
        {/* </a> */}
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center z-[999] justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 max-w-[900px] rounded-lg">
            <div className="flex flex-col gap-[15px]">
              <div className="flex items-center gap-5">
                <img src={img} className={`w-8 h-8 `} />
                <h1 className={`text-xl md:text-2xl font-semibold text-txt `}>
                  {title}
                </h1>
              </div>
              <p className={`text-xs md:text-sm text-txt`}>
                {desc}
              </p>

              <div className={`flex flex-wrap gap-2 md:mx-1`}>
                {skillArr.map((skill) => (
                  <Icon skill={skill} />
                ))}
              </div>
            </div>
            <div>
              <a target="_blank" href={url}>
                <button>
                  View Code
                </button>
              </a>
              
            </div>
            <div
              onClick={handleClick}
            >
              close
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const Icon = ({ skill }) => {
  return (
    <div
      className={`flex h-3 md:h-9 shadow-lg rounded-full items-center justify-between px-5`}
    >
      <p className="text-txt text-[10px] sm:text-xs md:text-sm">{skill}</p>
    </div>
  );
};
