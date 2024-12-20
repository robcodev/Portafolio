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
                    <section className={'mx-12 mt-20 grid grid-cols-2 gap-4'}>
                        <div className={'text-start'}>
                            <h1 className={'text-4xl'}>{project.name}</h1>
                            <blockquote className={'text-blackRob text-opacity-55 text-xs'}>{project.tags}</blockquote>
                        </div>

                        <h2 className={'text-start text-blackRob text-lg'}>{project.description}</h2>

                        <figure className={'bg-redRob my-10 w-full aspect-video col-span-2'}></figure>

                        <h3 className={'text-blackRob text-start'}>Otro tremendo texto para decir lo bacán que es el
                            proyecto</h3>
                        <figure className={'bg-redRob aspect-video'}></figure>

                        <img className={'h-8 animate-bounce col-span-2 m-auto my-20'} src={flechita} alt=""/>

                        <figure className={'bg-redRob w-full aspect-video col-span-2'}></figure>
                        <h2 className={'text-center col-span-2 text-blackRob text-lg mb-20'}>{project.description}</h2>

                        {/*Aqui debería ir el primer item de los tags?*/}
                        <h2 className={'text-3xl text-start'}>01 Branding</h2>
                        <figure className={'bg-redRob aspect-auto w-full h-48 col-span-2'}></figure>
                        <figure className={'bg-redRob aspect-auto w-full h-48 col-span-2'}></figure>
                        <figure className={'bg-redRob aspect-auto w-full h-48 col-span-2'}></figure>

                        <h2 className={'text-3xl text-start'}>02 Website</h2>
                        <figure className={'bg-redRob aspect-video col-span-2'}></figure>
                        <figure className={'bg-redRob aspect-square'}></figure>
                        <div>
                            <h4>Titulo de un super texto</h4>
                            <p>lorem</p>
                        </div>

                    </section>
                    {/*    Aqui animación tipo carrusel para mostrar más elementos gráficos realizado*/}
                    <div className={'grid grid-cols-3 gap-8 ms-12 my-20'}>
                        <figure className={'w-full h-96 bg-redRob'}></figure>
                        <figure className={'w-full h-96 bg-redRob'}></figure>
                        <figure className={'w-full h-96 bg-redRob'}></figure>
                    </div>


                    <Link to="/portfolio">Volver atrás</Link>
                </>
            )}
        </>
    )
}
export default ProjectPage