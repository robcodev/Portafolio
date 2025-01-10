import supabase from "../utils/supabase.js";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import flechita from '../assets/imgs/flechaComponent.svg';

const ProjectPage = () => {

    const {projectId} = useParams();

    const [fetchError, setFetchError] = useState(null);
    const [project, setProject] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            const {data, error} = await supabase
                .from('projects')
                .select('*')
                .eq('url', projectId)
                .single()

            if (error) {
                setFetchError(error)
                setProject(null)
                console.log(error)
            }
            if (data) {
                setProject(data)
                setFetchError(null)
                console.log()
            }
            console.log(data)
        }
        fetchProjects()
    }, [projectId]);

    return (
        <>
            {fetchError ? (
                <p>algo malo pasó: {fetchError}</p>
            ) : !project ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <section>
                        <h1
                            className={'text-4xl text-center uppercase tracking-wide'}>
                            {project.name}
                        </h1>
                        <p
                            className={'font-mono text-sm text-blackRob w-1/3 m-auto text-center mt-2'}>
                            {project.description}</p>
                        <div className={'bg-[#036536] h-72 mt-4'}>
                            <img
                                src={project.cover}
                                alt=''
                                className={'container w-full'}/>

                        </div>

                    </section>


                    <Link to="/src/pages/portafolio">Volver atrás</Link>
                </>
            )}
        </>
    )
}
export default ProjectPage