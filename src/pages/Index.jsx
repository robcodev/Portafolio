import flecha from '../assets/flechaComponent.svg'
import {motion} from "motion/react";

import {Link} from "react-router-dom";
import ModalContacto from "../Components/modalContacto.jsx";
import {useState} from "react";

export default function Index() {
    const [open, setOpen] = useState(false);

    return (
        <>


            <main className={'flex-1 flex flex-col items-center justify-center'}>
                 <div
                 className={''}>
                     <h1 className={'text-5xl leading-[1.3] uppercase text-center text-redRob mb-2'}>
                         diseñador gráfico y<br/>desarrollador full stack
                     </h1>

                     <p className={'text-blueRob font-mono mb-4 text-center font-normal text-lg'}>
                            Diseño y desarrollo soluciones digitales a medida.
                        </p>

                        <div
                            className={'justify-center flex gap-4'}>

                            <div>
                                <Link className={' flex h-12 gap-4'} to={"/portafolio"}>
                                    <motion.h3
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 0.8, rotate: -3}}
                                        className={'bg-blueRob text-yellowRob w-48 py-2 rounded-full text-2xl'}>VER PORTAFOLIO</motion.h3>
                                    <img className={' -rotate-90 '} src={flecha} alt=""/>
                                    <h3 className={'bg-yellowRob text-blueRob w-48 py-2 rounded-full text-2xl'}>CONTACTO</h3>
                                    <ModalContacto open={open} onClose={() => setOpen(false)}/>

                                </Link>
                            </div>
                        </div>

                    </div>
            </main>


        </>
    );
}
