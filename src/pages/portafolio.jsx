import {useEffect, useState} from "react";
import supabase from "../utils/supabase.js";
import {Link} from "react-router-dom";

export default function Portafolio() {

    const [fetchErr, setFetchErr] = useState(null);
    const [projects, setProjects] = useState(null);

    useEffect(()=>{
        const fetchProjects = async () => {
            const {data, err} = await supabase
                .from('projects')
                .select('*')
            if(err){
                setFetchErr(err);
                setProjects(null);
            }
            if(data){
                setProjects(data);
                setFetchErr(null);
            }
        }
        fetchProjects();
    },[])

    return (
        <>
            <section className="w-full grid">
                <div className={'mt-14 mb-6 flex grid-cols-2'}>
                    <h1 className={'text-start text-redRob text-6xl lowercase'}>PORTAFOLIO</h1>
                    <p className={'text-start font-mono text-blueRob text-md leading-none pt-2 ps-4 '}>
                        Desde identidad visual hasta desarrollo full stack, combino diseño y código para construir experiencias funcionales y atractivas.
                    </p>
                </div>
            </section>
            {/*Linea negra*/}
            <article className={'grid grid-cols-3 gap-6'}>

            {fetchErr && (<p>{fetchErr}</p>)}
            {projects && (
                projects.map((project, index) => (

                    <section key={index} className={'grid-cols-1 gap-4'}>
                        {/*<Link to={`/portafolio/${project.url}`}>*/}
                            <div>
                                <img
                                    src={project.img}
                                    alt={project.alt}
                                    className={'object-cover aspect-square w-full'}
                                />
                            </div>
                            <div className={'mt-2'}>
                                <p className={'font-mono uppercase text-blueRob text-start text-sm font-bold'}>{project.tags}</p>
                                <h3 className={'font-mono uppercase text-lg text-start text-redRob font-light'}>{project.name}</h3>
                                <h1 className={'font-bold text-start text-3xl uppercase text-blueRob'}>{project.subtitle}</h1>
                                <p className={'font-mono text-redRob text-start text-sm font-bold'}>{project.description}</p>


                            </div>
                        {/*</Link>*/}
                    </section>


                    // <div key={index} className={'last:mb-0'}>
                    //     <Link to={`/portafolio/${project.url}`}>
                    //     <ul className={'gap-4 hover:text-redRob mt-4'}>
                    //         <li className={'border-4 flex px-6 py-3 justify-between items-center  hover:rounded-full transition duration-500 hover:duration-500 hover:transition'}>
                    //
                    //             <div className={'flex gap-4'}>
                    //                 <h3 className={'font-mono text-[2.4rem] h-fit w-fit tracking-[-0.4rem]'}>0.{index + 1}</h3>
                    //                 <h2 className={'text-[2rem] pt-[3px] lowercase h-fit'}>{project.name}</h2>
                    //             </div>
                    //
                    //             {/*Etiquetas*/}
                    //             {/*TODO: Armar componente de etiquetas*/}
                    //             <div className={'flex gap-2 h-fit'}>
                    //                 <div className={'border-2 px-6 rounded-full'}>
                    //                     <h4>Front-End</h4>
                    //                 </div>
                    //             </div>
                    //
                    //             <div className={'hidden'}>
                    //                 <img src="" alt=""/>
                    //             </div>
                    //         </li>
                    //     </ul>
                    // </Link>
                    // </div>
                ))
            )}
            </article>
        </>
    )
}