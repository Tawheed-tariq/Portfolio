import { useEffect, useRef } from "react";
import SkillIcon from "./skillIcon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateSection = (section, animationType, duration = 0.8) => {
  const animationSettings = {
    fadeUp: {
      from: { opacity: 0, y: 200 },
      to: { opacity: 1, y: 0 },
    },
  };

  const { from, to } = animationSettings[animationType];

  gsap.fromTo(section, from, {
    ...to,
    duration,
    ease: 'power1.out',  // Smoother easing function
    scrollTrigger: {
      trigger: section,
      start: 'top bottom',
      end: 'top bottom',
    //   scrub: true,  // Ensures smooth scrolling animation
      toggleActions: 'play none none none',
    },
  });
};

export default function SkillCard({ skillName, skillArray }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      animateSection(sectionRef.current, "fadeUp");
    }
  }, []);

  return (
    <div
      ref={sectionRef}
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
