import {projects} from '../constants/index'
import Project from './project'
export default function Projects(){
    return(
<<<<<<< HEAD
        <div id="project" className={`w-full flex flex-col justify-center px-[20px] xl:px-[100px]`}>
=======
        <div id="project" className={`w-full flex flex-col justify-center px-[20px] md:px-[40px] lg:px-[150px]`}>
>>>>>>> 017b078dbaeabacd94e4c247646533039a01a640
            <h1 className={`text-2xl text-center mb-[20px]  font-bold md:text-3xl`}><span className="heading">Projects</span>  </h1>
            <div className='w-full flex flex-wrap justify-center'>
                {
                    projects.map((item) => (
                        <Project 
                            key={item.id} 
                            title={item.title} 
                            desc={item.desc} 
                            img={item.img} 
                            skillArr={item.skills_used}
                            url={item.url}
                        />
                    ))
                }
            </div>

        </div>
    )
}
