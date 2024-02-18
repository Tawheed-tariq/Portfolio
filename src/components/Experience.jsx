import Card from "./Card";
import { experience } from "../constants";
export default function Experience(){
    return(
        <>
            <div className={`w-full py-[40px] px-[20px] md:px-[250px]`}>
                <h1 className={`text-2xl font-bold text-txt`}>Experience </h1>

                {
                    experience.map((item) => (
                        <div key={item.id}>
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
            {/* <hr className={`w-full border-black mb-[10px]`} /> */}
        </>
    )
}