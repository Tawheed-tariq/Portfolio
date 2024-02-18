import Card from "./Card";
import { experience } from "../constants";
export default function Experience(){
    return(
        <>
            <div id="exp" className={`w-full py-[40px] px-[20px] md:px-[150px]`}>
                <h1 className={`text-2xl  text-center mb-[20px] font-bold text-txt`}>Experience </h1>

                <div className={`timeline-items flex flex-wrap relative max-w-[100%]`}>
                    {
                        experience.map((item) => (
                            <div key={item.id} className={`timeline-item mb-[10px] md:mb-[40px] w-[100%] relative`}>
                                <div className="timeline-dot"></div>
                                <Card
                                    img_url={item.icon}
                                    title={item.title}
                                    Desc={item.desc}
                                    from={item.strt}
                                    to={item.end}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* <hr className={`w-full border-black mb-[10px]`} /> */}
        </>
    )
}