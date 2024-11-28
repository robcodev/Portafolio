import ComponenteLineaAzul from './assets/imgs/componente1.webp'
import {Componente1} from './Componente1.jsx'
import {Bullet} from "./Listas.jsx";
import {FigRobert} from './FigRobert.jsx'
import {FlechaComponents} from "./Flechas.jsx";
import './App.css'
import {Mecanografia} from "./mecanografia.jsx";
import {EdComponente} from "./edComponente.jsx";
import illustrator from './assets/imgs/logosPNG/des_adobeIllustrator.png'

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


                <section className={''}>

                    <div>
                        <Componente1
                            children={ComponenteLineaAzul}
                        />
                    </div>

                </section>


                <section className={'pt-1 gap-4'}>
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

                <section>
                    <div className={'row-auto'}>
                        <EdComponente
                            titulo={'Manejo de Software de Diseño'}
                            img={illustrator}
                            descripcion={'Adobe Illustrator'}
                        />
                        <EdComponente
                            img={illustrator}
                            descripcion={'Adobe Illustrator'}
                        />
                    </div>
                    <div>
                        <EdComponente
                            img={illustrator}
                            descripcion={'Adobe Illustrator'}
                        />
                        <EdComponente
                            img={illustrator}
                            descripcion={'Adobe Illustrator'}
                        />
                    </div>

                </section>

            </main>
            <footer>
                <div>Hecho por mi</div>
                <div>iconos sociales</div>
            </footer>
        </>
    )
}

export default App
