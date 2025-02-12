import supabase from "../utils/supabase.js";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import flechas from '../assets/flechaComponent.svg'

const ProjectPage = () => {

    const {projectId} = useParams();

    const [fetchError, setFetchError] = useState(null);
    const [project, setProject] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            const {data, error} = await supabase
                .from('projects')
                .select('*, images(id, cover)')
                .eq('url', projectId)
                .single()

            if (error) {
                setFetchError(error)
                setProject(null)
            }
            if (data) {
                setProject(data)
                setFetchError(null)

            }
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
                            className={'text-4xl text-center uppercase tracking-wide text-blackRob'}>
                            {project.name}
                        </h1>
                        <p
                            className={'font-mono text-base text-blackRob w-1/3 m-auto text-center mt-8'}>
                            {project.subtitle}</p>
                        <div
                            className={'bg-[#036536] h-72 mt-8 flex items-center justify-center rounded-lg overflow-hidden'}>
                            <img
                                src={project.images[0].cover}
                                alt=''
                                className={'container h-44 w-fit'}/>
                        </div>

                        <p
                            className={'text-blackRob text-center text-xl font-mono italic font-base w-2/3 mt-6 m-auto'}>
                            {project.description}</p>

                    </section>

                    <section className={'flex justify-center gap-4 my-12 animate-bounce'}>
                        <img className={'h-11'} src={flechas} alt=""/>
                        <img className={'h-11'} src={flechas} alt=""/>
                        <img className={'h-11'} src={flechas} alt=""/>
                    </section>


                    <Link to="/src/pages/portafolio">Volver atrás</Link>
                </>
            )}
        </>
    )
}
export default ProjectPage