import Card from "./Card";
import { experience } from "../constants";



export default function Experience() {
    return (
        <>
            <div id="exp" className="w-full py-10 px-5 xl:px-36 overflow-x-hidden">
                <h1 className="text-2xl text-center mb-5 font-bold md:text-3xl">
                    <span className="heading">Experience</span>
                </h1>

                <div className="timeline-items flex flex-wrap relative w-full">
                    {
                        experience.map((item, index) => (
                            <div key={item.id} className="timeline-item mb-2 md:mb-10 w-full relative">
                                <div className="timeline-dot"></div>
                                <Card
                                    img_url={item.icon}
                                    title={item.title}
                                    Desc={item.desc}
                                    from={item.strt}
                                    to={item.end}
                                    index={index}
                                    organization={item.organization}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}