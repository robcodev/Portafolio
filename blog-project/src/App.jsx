import ComponenteLineaAzul from './assets/imgs/componente1.webp'
import {Componente1} from './Componente1.jsx'
import {Bullet} from "./Listas.jsx";
import {FigRobert} from './FigRobert.jsx'
import {FlechaComponents} from "./Flechas.jsx";
import './App.css'
import {Mecanografia} from "./mecanografia.jsx";
import {EdComponente} from "./edComponente.jsx";
import illustrator from './assets/imgs/logosPNG/des_adobeIllustrator.png'
import photoshop from './assets/imgs/logosPNG/des_adobePhotoshop.png'
import indesign from './assets/imgs/logosPNG/des_adobeIndesign.png'
import premiere from './assets/imgs/logosPNG/des_adobePremiere.png'
import figma from './assets/imgs/logosPNG/dev_figma.png'
import html from './assets/imgs/logosPNG/dev_html5.png'
import css from './assets/imgs/logosPNG/dev_css3.png'
import javascript from './assets/imgs/logosPNG/dev_javaScript.png'
import react from './assets/imgs/logosPNG/dev_react.png'
import posgres from './assets/imgs/logosPNG/dev_postgres.png'
import nodeJS from './assets/imgs/logosPNG/dev_nodeJS.png'
import github from './assets/imgs/logosPNG/dev_git.png'
import tailwind from './assets/imgs/logosPNG/dev_tailwind.png'
import {FooterIconos} from "./footer.jsx";
import instagram from './assets/imgs/logosFooter/Instagram_logo_2016.svg'
import linkedIn from './assets/imgs/logosFooter/LinkedIn_icon.svg'
import gitHub from './assets/imgs/logosFooter/github-mark.svg'

function App() {


    return (
        <>
            <nav></nav>
            <main className={''}>
                <section className={'grid grid-cols-2 gap-2'}>

                    <div className={'row-span-2'}>
                        <FigRobert/>
                    </div>


                    <div className={'mt-16'}>
                        <div className={'row-span-2 shrink'}>
                            <Mecanografia
                                classname={'relative h-20'}
                            />
                        </div>


                        <div className={' bottom-0'}>
                            <p className={'text-start text-sm'}>
                            <span
                                className={'bg-redRob rounded-full md:px-10 px-2 font-sans text-xs'}>Robert Correa Toro</span>
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

                <div>
                    <Componente1
                        children={ComponenteLineaAzul}
                    />
                </div>

                <section className={'grid-cols-2 grid gap-2'}>
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
                            que uso para dar vida a ideas y construir aplicaciones que realmente hacen clic (literal y
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

                <section id={'softwareStack'} className={'grid'}>

                    <div className={'col-span-2 gap-2'}>
                        <h2 className={' text-3xl text-blueRob font-serif font-bold mt-4 text-start'}>
                            Stack de Diseño</h2>

                        <div className={'flex flex-row pt-1 font-sans font-bold'}>
                <span className={'bg-redRob w-full rounded-full text-sm text-start ps-4'}>
                   Escribiendo ideas para colorear
                </span>
                        </div>

                        <p className={'text-blackRob font-sans text-xs text-start font-light pt-1'}>Las herramientas
                            mágicas
                            que uso para dar vida a ideas y construir aplicaciones que realmente hacen clic (literal y
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

                <section className={''}>


                </section>

                <div>
                    <Componente1
                        className={'mt-5'}
                        children={ComponenteLineaAzul}
                    />
                </div>

                <section id={'educacionExperiencia'} className={'pt-1 gap-2'}>
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

                </section>


            </main>
            <footer >
                <div className={'mt-5 p-5 flex-wrap flex gap-4 justify-center'}>

                    <a href="#"> <img className={'w-8'} src={instagram} alt=""/></a>
                    <a href="#"><img className={'w-8'} src={linkedIn} alt=""/></a>
                    <a href="#"><img className={'w-8'} src={gitHub} alt=""/></a>
                </div>
                <p className={'text-center text-blackRob font-sans font-light text-sm'}>Hecho por mi mismo</p>
                <a href="https://pokemondb.net/pokedex/meowth"><img  className={'w-12 m-auto'}
                    src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/meowth.png" alt="Meowth"/></a></footer>
        </>
    )
}

export default App
