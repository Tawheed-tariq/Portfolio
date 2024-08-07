import SkillIcon from "./skillIcon";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


export default function SkillCard({ skillName, skillArray }) {
  useEffect(()=>{
    Aos.init({duration:900, anchorPlacement:"top-center"})
},[])
  return (
    <div
      data-aos="zoom-in-up"
      className={`border-[1px] sm:w-[700px] md:w-[900px] border-gray-400 px-[25px] py-[10px] my-[20px] rounded-3xl`}
    >
      <h1 className={`text-xl md:text-2xl font-bold mb-[10px]`}>
        <span className="decorate-text">{skillName}</span>
      </h1>
      <div className={`flex flex-wrap gap-[15px] my-[15px] md:mx-[20px]`}>
        {skillArray.map((skill) => (
          <SkillIcon key={skill.id} title={skill.title} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}
