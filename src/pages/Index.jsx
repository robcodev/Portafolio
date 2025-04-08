import githubIcon from "../assets/imgs/gitHub.png"
import linkedinIcon from "../assets/imgs/linkedIn.png"


import Proyectos from "../Components/proyectos.jsx";
import Blog from "../Components/blog.jsx";
import SobreMi from "../Components/sobreMi.jsx";

export default function Index() {

    return (
        <>
            <main className={'py-14'}>
                <section>
                    <div className={'flex justify-between mb-4'}>
                        <h2
                            className={'uppercase text-3xl text-start text-whiteRob text-handjet-bold leading-[1em]'}>
                            Robert <br/> Correa <br/> Toro
                        </h2>

                    </div>

                    <h1 className={'text-redRob text-anton text-4xl text-start'}>UX/UI DESIGNER && FULL STACK
                        DEVELOPER</h1>
                    <p className={'text-whiteRob text-md text-handjet-regular text-start leading-tight'}>
                        Especializado en crear experiencias digitales accesibles, escalables y visualmente
                        impactantes.
                    </p>
                    <h3 className={'uppercase text-center rounded-full text-[#070914] text-anton my-4 p-1 bg-whiteRob'}>
                        Proyectos</h3>

                    {/*    carrusel? ? */}
                    <img
                        className={'rounded-lg border-whiteRob border h-72 w-full'}
                        src="" alt=""/>

                    <div className={'grid grid-cols-2 gap-2 my-4'}>
                        <a className={'flex w-full rounded-full justify-center items-center bg-whiteRob px-2 py-1'}
                            href="#">
                            <img
                                src={githubIcon}
                                alt={''}
                                className={''}/>
                        </a>

                        <a className={'flex w-full rounded-full justify-center items-center bg-whiteRob px-2 py-1'}
                            href="#">
                            <img
                                src={linkedinIcon}
                                alt={''}
                                className={'rounded'}/>
                        </a>
                    </div>

                </section>

                <SobreMi/>
                <Proyectos/>
                <Blog/>


                <footer className={'grid grid-cols-3 grid-flow-row-3 gap-2'}>
                    <h2
                        className={'uppercase text-xl text-start text-whiteRob text-handjet-bold leading-[1em]'}>
                        Robert Correa Toro
                    </h2>
                    <h5 className={'text-redRob text-anton text-xl text-start col-span-2'}>UX/UI DESIGNER && <br/> FULL
                        STACK
                        DEVELOPER</h5>

                    <div className={'rounded-lg p-4 border-whiteRob border col-span-4 text-whiteRob'}>
                        <h2
                            className={'text-start uppercase'}>
                            Front End
                        </h2>
                        <p
                            className={'text-handjet-regular text-start'}>
                            REACT / next.js / vite / tailwindcss / bootstrap / javascript / html5 / css3
                        </p>
                    </div>
                    <h3
                        className={'uppercase text-center rounded-full text-[#070914] text-anton p-1 bg-whiteRob'}>
                        GitHub
                    </h3>
                    <h3
                        className={'uppercase text-center rounded-full text-[#070914] text-anton p-1 bg-whiteRob'}>
                        GitHub
                    </h3>
                    <h3
                        className={'uppercase text-center rounded-full text-[#070914] text-anton p-1 bg-whiteRob'}>
                        GitHub
                    </h3>
                </footer>
            </main>

        </>
    );
}
