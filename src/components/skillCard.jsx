import SkillIcon from "./skillIcon";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


export default function SkillCard({ skillName, skillArray }) {
  useEffect(() => {
    Aos.init({ duration: 900, anchorPlacement: "top-center" })
  }, [])
  return (
    <div
      data-aos="zoom-in-up"
      className="w-full max-w-3xl border border-gray-400 px-6 py-4 my-5 rounded-3xl overflow-hidden shadow-lg bg-white flex flex-col items-center justify-center"
    >
      <h1 className="text-xl md:text-2xl font-bold mb-3">
        <span className="decorate-text">{skillName}</span>
      </h1>
      <div className="flex flex-wrap gap-4 my-4">
        {skillArray.map((skill) => (
          <SkillIcon key={skill.id} title={skill.title} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}
