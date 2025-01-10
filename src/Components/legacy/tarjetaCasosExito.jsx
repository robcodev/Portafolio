import tailwindcss from "../../assets/imgs/logosPNG/dev_tailwind.png";
import flecha from '../../assets/imgs/flechaComponent.svg'
import figma from '../../assets/imgs/logosPNG/dev_figma.png'
import html from '../../assets/imgs/logosPNG/dev_html5.png'
import js from '../../assets/imgs/logosPNG/dev_javaScript.png'
import react from '../../assets/imgs/logosPNG/dev_react.png'
import {motion} from 'motion/react'
import zomoNewen from '../../assets/imgs/portfolioImgs/DestacadoZomoNewen1.jpg'


const TarjetaCasosExito = () => {

    return (
        <>
            <section className="grid grid-cols-2 gap-12  mb-10 p-24 ">
                <div>

                    <img
                        alt="logo"
                        src={zomoNewen}
                        className="aspect-4/3 bg-redRob rounded-lg"
                    />



                    <p
                        className={'text-xs text-blackRob mb-4 mt-6 text-start'}
                    >
                        BRANDING - SEO - SEM - CONTENT - LANDING PAGE
                    </p>

                    <div
                        className={'text-start '}>
                        <h3 className="text-2xl font-bold text-gray-500 text-start text-blackRob mb-4">
                            Desarrollo de Branding y Landing Page
                        </h3>

                        <p
                            className={'my-4 text-blackRob'}>
                            Creé un sitio web a medida, resultando en un crecimiento del 35% en 3 meses.
                        </p>
                        <div
                            className={'flex items-center justify-start gap-4 h-12'}>
                            <img className='w-6' src={figma} alt=""/>
                            <img className='w-6' src={html} alt=""/>
                            <img className='w-6' src={tailwindcss} alt=""/>
                            <img className='w-6' src={js} alt=""/>
                            <img className='w-6' src={react} alt=""/>
                        </div>
                        <motion.div
                            className={'flex align-middle gap-2 h-8 mt-4 w-fit'}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9, rotate: -3}}
                            onHoverStart={event => {
                            }}
                            onHoverEnd={event => {
                            }}
                        >
                            <button
                                className={'hover:font-bold button bg-redRob text-whiteRob rounded-full text-xs p-2 px-4'}>
                                Ver más...
                            </button>
                            <img
                                src={flecha}
                                className={'-rotate-90'}
                                alt=""/>

                        </motion.div>


                    </div>


                </div>

                <div className={'mt-24'}>
                    <figure
                        className="aspect-4/3 bg-redRob rounded-lg"
                    >
                        {}
                    </figure>
                    <p
                        className={'text-xs text-blackRob mb-4 mt-6 text-start'}
                    >
                        BRANDING - SEO - SEM - CONTENT - LANDING PAGE
                    </p>

                    <div
                        className={'text-start '}>
                        <h3 className="text-2xl font-bold text-gray-500 text-start text-blackRob mb-4">
                            Desarrollo de Branding y Landing Page
                        </h3>

                        <p
                            className={'my-4 text-blackRob'}>
                            Creé un sitio web a medida, resultando en un crecimiento del 35% en 3 meses.
                        </p>
                        <div
                            className={'flex items-center justify-start gap-4 h-12'}>
                            <img className='w-6' src={figma} alt=""/>
                            <img className='w-6' src={html} alt=""/>
                            <img className='w-6' src={tailwindcss} alt=""/>
                            <img className='w-6' src={js} alt=""/>
                            <img className='w-6' src={react} alt=""/>
                        </div>

                        <button type="button"
                                className="mt-4 text-white bg-blueRob hover:bg-blueRob text-whiteRob focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:hover:bg-blue-700 focus:outline-none">
                            Ver caso
                        </button>

                    </div>


                </div>
            </section>

        </>

    )
};
export default TarjetaCasosExito;