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
            <section className="w-full">
                <div className={'mb-6 container'}>
                    <h1 className={'text-start text-redRob text-6xl lowercase'}>PORTAFOLIO</h1>
                    <p></p>
                </div>
            </section>
            {/*Linea negra*/}
            <div></div>

            {fetchErr && (<p>{fetchErr}</p>)}
            {projects && (
                projects.map((project, index) => (
                    <div key={index} className={'last:mb-0'}>
                        <Link to={`/portafolio/${project.url}`}>
                        <ul className={'gap-4 hover:text-redRob mt-4'}>
                            <li className={'border-4 flex px-6 py-3 justify-between items-center  hover:rounded-full transition duration-500 hover:duration-500 hover:transition'}>

                                <div className={'flex gap-4'}>
                                    <h3 className={'font-mono text-[2.4rem] h-fit w-fit tracking-[-0.4rem]'}>0.{index + 1}</h3>
                                    <h2 className={'text-[2rem] pt-[3px] lowercase h-fit'}>{project.name}</h2>
                                </div>

                                {/*Etiquetas*/}
                                {/*TODO: Armar componente de etiquetas*/}
                                <div className={'flex gap-2 h-fit'}>
                                    <div className={'border-2 px-6 rounded-full'}>
                                        <h4>Front-End</h4>
                                    </div>
                                </div>

                                <div className={'hidden'}>
                                    <img src="" alt=""/>
                                </div>
                            </li>
                        </ul>
                    </Link>
                    </div>
                ))
            )}

        </>
    )
}