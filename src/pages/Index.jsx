import githubIcon from "../assets/imgs/gitHub.png"
import linkedinIcon from "../assets/imgs/linkedIn.png"
import heroSec from "../assets/imgs/heroSec.jpg";
import flechaIcon from '../assets/imgs/flechaComponent1.png'


import Proyectos from "../Components/proyectos.jsx";
import Blog from "../Components/blog.jsx";
import SobreMi from "../Components/sobreMi.jsx";
import EmblaCarousel from "../Components/carrusel.jsx";

export default function Index() {

    const OPTIONS = {dragFree: true, loop: true};
    const SLIDE_COUNT = 5;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
    return (
        <>
            <main className={'xl:px-72 py-12'}>
                <section>
                    <div className={'flex justify-between mb-4'}>
                        <h2
                            className={'uppercase text-3xl text-start text-whiteRob text-handjet-bold leading-[1em]'}>
                            Robert <br/> Correa <br/> Toro
                        </h2>

                    </div>


                    <div className={'my-16'}>
                        <div className={'flex justify-between w-full gap-8'}>
                            <h1 className={'text-redRob text-nowrap text-anton text-8xl text-start'}>UX/UI DESIGNER &&</h1>
                            <a className={'w-full rounded-full flex gap-4 items-center justify-center '}
                                href="">
                                <h3 className={'uppercase text-4xl text-center bg-whiteRob rounded-full w-full h-fit text-[#070914] text-anton my-4 p-3.5 '}>Ver Portafolio</h3>
                                <picture>
                                    <img
                                        className={'h-full w-full'}
                                        src={flechaIcon} alt="flecha"/>
                                </picture>
                            </a>

                        </div>
                        <div className={'flex justify-between w-full gap-8 mb-4'}>
                            <p className={'text-whiteRob text-lg text-handjet-regular text-start leading-tight'}>
                                Me gusta hacer cosas, de comienzo a fin.
                            </p>
                            <h2 className={'text-redRob text-nowrap text-anton text-8xl text-end'}>FULL STACK
                                DEVELOPER</h2>
                        </div>
                    </div>



                    <div className={'grid grid-cols-3 gap-2 my-4'}>
                        <a className={'flex w-full rounded-full justify-center items-center bg-whiteRob px-2 py-1 hover:bg-blackRob transition'}
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
                        <a className={'flex w-full rounded-full justify-center items-center bg-whiteRob px-2 py-1'}
                           href="#">
                            <img
                                src={linkedinIcon}
                                alt={''}
                                className={'rounded'}/>
                        </a>
                    </div>
                    {/*    carrusel? ? */}
                    <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
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
