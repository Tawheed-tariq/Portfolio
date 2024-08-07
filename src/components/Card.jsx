import { useEffect, useRef } from "react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const animateSection = (section, animationType, duration = 0.6) => {
  const animationSettings = {
    slideRight: {
      from: { opacity: 0, x: -400 },
      to: { opacity: 1, x: 0 },
    },
    slideLeft: {
      from: { opacity: 0, x: 400 },
      to: { opacity: 1, x: 0 },
    },
  };

  const { from, to } = animationSettings[animationType];
  
  gsap.fromTo(section, from, {
    ...to,
    duration,
    ease: 'power1.out',  // Smoother easing function
    scrollTrigger: {
      trigger: section,
      start: 'top 70%',
      end: 'top 70%',
      scrub: true,  // Ensures smooth scrolling animation
      toggleActions: 'play none none none',
    },
  });
};



export default function Card({title, Desc, from, to, img_url, grade, index}){
    const sectionRefs = useRef([]);

    useEffect(() => {
        sectionRefs.current.forEach((section, index) => {
            index %2 == 0? animateSection(section, 'slideRight') : animateSection(section, 'slideLeft');
        });
      }, []);
    return(
        <div 
        ref={el => sectionRefs.current[index] = el}
        className={` shadow max-w-[800px] p-[15px] mx-[20px] my-[10px] rounded-xl flex gap-[15px] `}>
            <div className="w-[40px]">
                <img src={img_url} className={`w-[35px] h-[35px] mt-[10px]`} />
            </div>


            <div className={`w-[95%]`}>
                <h1 className={`text-xl md:text-2xl font-semibold text-txt mb-[10px]`}>{title}</h1>
                <p className={`text-xs md:text-sm text-txt`}>{Desc}</p>
                <div className="mt-[10px]">
                    {grade && <p className={`text-[10px] md:text-xs text-txtDim text-end `} ><span className="font-medium">Grade</span> : {grade}</p>}
                    <p className={`text-[10px] md:text-xs text-txtDim text-end `} >{from} - {to}</p>
                </div>
            </div>
        </div>

    )
}
