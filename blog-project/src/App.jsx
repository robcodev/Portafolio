import {useState} from 'react'

import miFoto1 from './assets/fondoRobert.webp'
import miFoto2 from './assets/imgs/miFoto2.png'
import ComponenteLineaAzul from './assets/imgs/componente1.webp'
import {Componente1} from './Componente1.jsx'
import {Bullet} from "./Listas.jsx";
import {FigRobert} from './FigRobert.jsx'
import {FlechaComponents} from "./Flechas.jsx";
import './App.css'
import {Mecanografia} from "./mecanografia.jsx";

function App() {


    return (
        <>
            <nav></nav>
            <main>
                <section className={'flex flex-row justify-center gap-4'}>
                    <div className={'basis-2/5 '}>
                        <FigRobert children={miFoto1}
                        />

                    </div>

                    <div className={'basis-3/5 mt-2'}>
                        <Mecanografia
                        />
                        <div className={'block'}>

                        <p className={'text-start text-sm'}>
                            <span
                                className={'bg-redRob rounded-full md:px-10 px-4 text-white font-sans text-xs'}>Robert Correa Toro</span>
                        </p>
                        <ul>
                            <li className={'text-start text-sm text-redRob'}>ranireto@gmail.com</li>
                            <li className={'text-start text-sm text-redRob'}>+569 7531 5683</li>
                            <li className={'text-start text-sm text-redRob'}>Iquique, Chile</li>
                        </ul>
                        <span className={'flex-row flex'}>
                            <FlechaComponents/>
                            <FlechaComponents/>
                            <FlechaComponents/>
                        </span>
                        </div>
                    </div>

                </section>

                <p className={'text-blueRob text-start text-xs hidden'}>
                    Me especializo en optimizar flujos de trabajo y en implementar soluciones visuales eficientes,
                    orientadas a mejorar la productividad y la calidad en cada proyecto. </p>

                <section className={''}>
                    <Componente1
                        children={ComponenteLineaAzul}
                        className={'w-full'}
                    />
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

                    <div>Conocimientos</div>
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
