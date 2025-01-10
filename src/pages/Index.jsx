import gato from '../assets/gatoRob.jpg'
import flecha from '../assets/imgs/flechaComponent.svg'
import star from '../assets/estrellaEducacion.svg'
import {motion} from "motion/react";

import {Link} from "react-router-dom";
export default function Index(){
    return (
        <>

            <main className={'grid grid-cols-2 gap-8'}>

                <section className={''}>
                    <div>
                        <p className={'text-blackRob font-mono text-lg text-start font-medium'}>¡Hola! Mi nombre es
                            Robert Correa, y soy...</p>
                        <h1 className={'text-8xl text-start text-redRob mb-10'}>desarrollador full stack y diseñador
                            multimedia.</h1>

                        <div
                            className={'flex gap-4 mb-14'}>

                            <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.8, rotate: -3}}
                            >

                                <Link className={' flex h-12 gap-2 mr-12'} to={"/portafolio"}>
                                    <h3 className={'bg-blackRob text-whiteRob px-12 py-2 rounded-full text-2xl'}>PORTAFOLIO</h3>
                                    <img className={' -rotate-90 '} src={flecha} alt=""/>
                                </Link>
                            </motion.div>

                            <p className={'text-blackRob font-mono font-bold text-start'}>Ayudo a las empresas a vender por medios digitales.</p>
                        </div>

                        <div className={'flex gap-4 justify-center'}>
                            <div>
                                <h4 className={'my-4 px-6 py-1 rounded-full text-xl bg-[#1A8A56] text-[#84FF92]'}>WEB APP</h4>
                                <h4 className={'my-4 px-6 py-1 rounded-full text-xl text-[#FCE36C]  bg-[#7D1DFD]'}>PRINT</h4>
                            </div>
                            <div>
                                <h4 className={'my-4 px-6 py-1 rounded-full text-xl bg-blackRob text-whiteRob'}>BACK-END</h4>
                                <h4 className={'my-4 px-6 py-1 rounded-full text-xl text-blackRob bg-[#D3D3D3]'}>MARKETING</h4>
                            </div>
                            <div>
                                <h4 className={'my-4 px-6 py-1 bg-blueRob text-whiteRob rounded-full text-xl'}>FRONT-END</h4>
                                <h4 className={'my-4 px-6 py-1 rounded-full text-xl bg-[#FCE36C]  text-redRob'}>BRANDING</h4>
                            </div>
                            <div>
                                <h4 className={'my-4 px-6 py-1 rounded-full text-xl text-whiteRob bg-[#119DA4]'}>UX/UI</h4>
                                <h4 className={'my-4 px-6 py-1 rounded-full text-xl text-[#FCE36C]  bg-redRob'}>SEO</h4>
                            </div>
                        </div>
                    </div>


                </section>

                <section>
                    <div>
                        <img className={'w-full h-[412px] overflow-hidden rounded-lg'} src={gato} alt=""/>
                        <p className={'font-mono text-redRob font-bold text-start mt-10'}>Combino estrategia, diseño y desarrollo para entregar servicios con sentido e integrales.</p>
                    </div>
                    <div className={'w-80 m-auto mt-14'}>
                        <div className={'flex gap-2 h-4 mb-2'}>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                        </div>
                        <div className={''}>
                            <p className={'text-redRob text-start font-mono'}>
                                “Excelente trabajo, te ayuda a encontrar el mejor diseño para tus proyectos. Muy                                profesional
                                agradecido por los trabajos.”</p>
                            <p className={'text-redRob font-mono font-bold'}>-- Gonzalo Monardes</p>
                        </div>
                    </div>
                </section>
            </main>


        </>
    );
}
