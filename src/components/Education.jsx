import {education} from '../constants/index'
import Card from './Card'
export default function Education(){
    return(
        <>
            <div id="edu" className={`w-full py-[40px] flex flex-col justify-center items-center  px-[20px] md:px-[150px]`}>
                <h1 className={`text-2xl text-center mb-[20px] font-bold md:text-3xl`}><span className="heading">Education</span>  </h1>

                {
                    education.map((item) => (
                        <div key={item.id}>
                            <Card
                                img_url={item.icon}
                                title={item.title}
                                Desc={item.desc}
                                from={item.strt}
                                to={item.end}
                                grade={item.grade}
                            />
                        </div>
                    ))
                }

            </div>
            <hr className={`w-full border-black mb-[10px]`} />
        </>
    )
}