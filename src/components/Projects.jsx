import {projects} from '../constants/index'
import Project from './project'
export default function Projects(){
    return(
        <div id="project" className={`w-full flex flex-col justify-center px-[20px] lg:px-[150px]`}>
            <h1 className={`text-2xl text-center mb-[20px]  font-bold md:text-3xl`}><span className="heading">Projects</span>  </h1>
            <div className='w-full flex flex-wrap gap-6 justify-center'>
                {
                    projects.map((item) => (
                        <Project 
                            key={item.id} 
                            title={item.title} 
                            desc={item.desc} 
                            img={item.img} 
                            skillArr={item.skills_used}
                            giturl={item.giturl}
                            weburl={item.deployed ? item.weburl : null}
                            deployed={item.deployed}
                        />
                    ))
                }
            </div>
        </div>
    )
}
