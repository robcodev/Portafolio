import {Bullet} from "../Components/legacy/Listas.jsx";
import {FigRobert} from '../Components/legacy/FigRobert.jsx'
import {FlechaComponents} from "../Components/legacy/Flechas.jsx";
import '../App.css'
import {Mecanografia} from "../Components/legacy/mecanografia.jsx";
import {EdComponente} from "../Components/legacy/edComponente.jsx";
import illustrator from '../assets/imgs/logosPNG/des_adobeIllustrator.png'
import photoshop from '../assets/imgs/logosPNG/des_adobePhotoshop.png'
import indesign from '../assets/imgs/logosPNG/des_adobeIndesign.png'
import premiere from '../assets/imgs/logosPNG/des_adobePremiere.png'
import html from '../assets/imgs/logosPNG/dev_html5.png'
import css from '../assets/imgs/logosPNG/dev_css3.png'
import javascript from '../assets/imgs/logosPNG/dev_javaScript.png'
import react from '../assets/imgs/logosPNG/dev_react.png'
import posgres from '../assets/imgs/logosPNG/dev_postgres.png'
import nodeJS from '../assets/imgs/logosPNG/dev_nodeJS.png'
import github from '../assets/imgs/logosPNG/dev_git.png'
import tailwind from '../assets/imgs/logosPNG/dev_tailwind.png'
import {Rayita} from "../Components/legacy/rayita.jsx";

function Contacto() {


    return (
        <>
                <section className={'gap-3 flex flex-wrap  justify-center lg:gap-8'}>

                    <div className={'basis-36 md:basis-60 lg:basis-1/5 lg:justify-items-center lg:-ms-64 md:justify-items-start md:-ms-40 sm:justify-items-start'}>
                        <FigRobert/>
                    </div>


                    <div className={'mt-16 lg:mt-56 basis-1/4 lg:basis-1/4'}>
                        <div className={'lg:text-7xl'}>
                            <Mecanografia
                                classname={'relative h-20'}
                            />
                        </div>


                        <div className={' bottom-0'}>
                            <p className={'text-start text-sm'}>
                            <span
                                className={'bg-redRob rounded-full lg:px-10 px-2 font-sans text-xs'}>Robert Correa Toro</span>
                            </p>
                            <ul>
                                <li className={'text-start text-sm text-redRob'}>ranireto@gmail.com</li>
                                <li className={'text-start text-sm text-redRob'}>+569 7531 5683</li>
                                <li className={'text-start text-sm text-redRob'}>Iquique, Chile</li>
                            </ul>

                            <div className={'flex flex-wrap'}>
                                <FlechaComponents/>
                                <FlechaComponents/>
                                <FlechaComponents/>
                            </div>
                        </div>
                    </div>
                </section>

                <Rayita
                />

                <div className={'lg:flex lg:flex-wrap lg:gap-10 md:flex md:flex-wrap md:gap-8 justify-center mb-4'}>
                    <section className={'grid-cols-2 grid grid-flow-dense lg:w-1/3 md:w-1/3'}>
                        <div className={'col-span-2 gap-2'}>
                            <h2 className={' text-3xl text-blueRob font-serif font-bold mt-4 text-start'}>
                                Stack de Desarrollo</h2>

                            <div className={'flex flex-row pt-1 font-sans font-bold'}>
                <span className={'bg-redRob w-full rounded-full text-sm text-start ps-4'}>
                   Escribiendo ideas para colorear
                </span>
                            </div>

                            <p className={'text-blackRob font-sans text-xs text-start font-light pt-1'}>Las herramientas
                                mágicas
                                que uso para dar vida a ideas y construir aplicaciones que realmente hacen clic (literal
                                y
                                figurativamente).</p>
                        </div>


                        <EdComponente
                            img={html}
                            descripcion={'HTML 5'}
                        />
                        <EdComponente
                            img={css}
                            descripcion={'CSS3'}
                        />


                        <EdComponente
                            img={javascript}
                            descripcion={'JavaScript'}
                        />

                        <EdComponente
                            img={react}
                            descripcion={'ReactJS'}
                        />

                        <EdComponente
                            img={posgres}
                            descripcion={'PostgreSQL'}
                        />
                        <EdComponente
                            img={nodeJS}
                            descripcion={'Node.js'}
                        />


                        <EdComponente
                            img={github}
                            descripcion={'GIT'}
                        />
                        <EdComponente
                            img={tailwind}
                            descripcion={'Tailwind CSS'}
                        />

                    </section>

                    <section id={'softwareStack'} className={'grid lg:w-1/3 md:w-1/3'}>

                        <div className={'col-span-2 gap-2 '}>
                            <h2 className={' text-3xl text-blueRob font-serif font-bold mt-4 text-start'}>
                                Stack de Diseño</h2>

                            <div className={'flex flex-row pt-1 font-sans font-bold'}>
                <span className={'bg-redRob w-full rounded-full text-sm text-start ps-4'}>
                   Escribiendo ideas para colorear
                </span>
                            </div>

                            <p className={'text-blackRob font-sans text-xs text-start font-light pt-1'}>Las herramientas
                                mágicas
                                que uso para dar vida a ideas y construir aplicaciones que realmente hacen clic (literal
                                y
                                figurativamente).</p>
                        </div>
                        {/*<h2 className={'text-3xl text-blueRob font-serif font-bold mt-4 text-start'}>*/}
                        {/*    Stack de Diseño</h2>*/}
                        <div className={'col-span-2'}>
                            <EdComponente
                                img={illustrator}
                                descripcion={'Adobe Illustrator'}
                                estrellitas={'si'}
                            />
                            <EdComponente
                                img={photoshop}
                                descripcion={'Adobe Photoshop'}
                                estrellitas={'si'}
                            />

                            <EdComponente
                                img={indesign}
                                descripcion={'Adobe InDesign'}
                                estrellitas={'si'}
                            />
                            <EdComponente
                                img={premiere}
                                descripcion={'Adobe Premiere'}
                                estrellitas={'si'}
                            />
                        </div>
                    </section>
                </div>


                <Rayita/>

                <section id={'educacionExperiencia'} className={'pt-1 gap-2 lg:flex lg:flex-wrap lg:gap-10 md:flex md:flex-wrap justify-center md:gap-8'}>
                    <div className={'lg:w-1/3 md:w-1/3'}>

                        <Bullet
                            titulo={'Educación'}
                            fecha={'2013-2019'}
                            tituloRojo={'Diseño gráfico profesional'}
                            lugar={'Universidad Técn. de Chile INACAP'}
                        />

                        <Bullet
                            fecha={'2024-Presente'}
                            tituloRojo={'Desarrollo Full-Stack Javascript'}
                            lugar={'Talento Digital - EDUTECNO'}
                        />
                    </div>

                    <div className={'lg:w-1/3 md:w-1/3'}>
                        <Bullet
                            titulo={'Experiencia'}
                            fecha={'Junio - Noviembre 2024'}
                            tituloRojo={'Director de operaciones'}
                            lugar={'Power Fishing SPA (Independiente)'}
                            descripcion={'Mi primer acercamiento fue con el objetivo de diseñar un catálogo y publicitar los productos mediante mejoras en la página web. A partir de ese proyecto, asumí una posición más amplia, gestionando ventas y administración, control de stock, despachos, y procesos comerciales.'}
                        />

                        <Bullet
                            fecha={'Agosto 2023 a Enero 2024'}
                            tituloRojo={'Encargado área de producción'}
                            lugar={'Graduados.cl'}
                            descripcion={'Me desempeñé como encargado del área de producción gráfica, donde implementé la automatización de procesos de impresión y diseño para optimizar la producción y venta de cuadros de graduación en grandes volúmenes.'}
                        />
                    </div>

                </section>
        </>
    )
}

export default Contacto
