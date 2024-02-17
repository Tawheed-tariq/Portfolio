import {education} from '../constants/index'
import Card from './Card'
export default function Education(){
    return(
        <>
            <div className={`w-full py-[40px] px-[20px] md:px-[250px]`}>
                <h1 className={`text-2xl font-bold text-txt`}>Experience </h1>

                {
                    education.map((item) => (
                        <Card
                            img_url={item.icon}
                            title={item.title}
                            Desc={item.desc}
                            from={item.strt}
                            to={item.end}
                            grade={item.grade}
                        />
                    ))
                }

            </div>
            <hr className={`w-full border-black mb-[10px]`} />
        </>
    )
}