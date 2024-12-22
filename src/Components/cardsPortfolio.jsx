import supabase from "../utils/supabase.js";

import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export function CardsPortfolio() {

    const [fetchError, setFetchError] = useState(null);
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            const {data, error} = await supabase
                .from('projects')
                .select('*')
            if (error) {
                setFetchError(error)
                setProjects(null)
            }
            if (data) {
                setProjects(data)
                setFetchError(null)
            }
        }
        fetchProjects()
    }, []);

    return (
        <>
            {fetchError && (<p>{fetchError}</p>)}
            {projects && (
                projects.map((project, index) => (
                    <div key={index} className={'sm:aspect-[3/4] md:aspect-[3/5] rounded-lg overflow-hidden p-2'}>
                        <Link to={`/${project.url}`}>
                            {project.img && <img className={'aspect-square mb-2 h-fit rounded-lg'} src={project.img}
                                                 alt="Imagen del proyecto"/>}
                        </Link>
                        <div className={'border-b pb-1.5'}>
                            <p className={'text-blackRob text-start text-sm'} key={project.name}>{project.subtitle}</p>
                            <h3 className={'font-sans font-bold text-start'} key={project.name}>{project.name}</h3>
                            <p className={'text-blackRob text-start text-sm mt-2'}
                               key={project.name}>{project.description}</p>

                        </div>
                    </div>
                ))
            )}
        </>
    )
}

export default CardsPortfolio

