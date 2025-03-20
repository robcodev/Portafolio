import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

const projects = [
    {id: 1, title: "Restaurant Machu Picchu", description: "//01 Landing page con menú dinámico"},
    {id: 2, title: "Zomo Newen", description: "//02 Landing Page con cotizador con agente ia"},
    {id: 3, title: "TCG Planet", description: "//03 Plataforma descarga de contenido social"},

]

export default function RightEntry() {

    const [index, setIndex] = useState(0);
    const [scroll, setScroll] = useState(false);

    const handleScroll = (e) => {
        if (scroll) return;

        setScroll(true);

        if (e.deltaY > 0){
            setIndex((prevIndex) => (prevIndex + 1) % projects.length);
        } else {
            setIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
        }
        setTimeout(()=> setScroll(false), 600);
    }

    return (
        <>
            <section className={'overflow-y-scroll scrollbar-hide col-span-2 bg-whiteRob rounded p-6 h-[100%] '}
                     onWheel={handleScroll}>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={projects[index].id}
                        className=""
                        initial={{y: 100, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        exit={{y: -100, opacity: 0}}
                        transition={{duration: 0.6}}
                    >
                        <p className="text-gray-700 mt-2"></p>

                        <div className={'flex gap-4 justify-center items-center mb-4 [&>img]:rounded'}>
                            <img className={'w-1/3 bg-blueRob aspect-square'} src="" alt=""/>
                            <img className={'w-1/3 bg-blueRob aspect-square'} src="" alt=""/>
                            <img className={'w-1/3 bg-blueRob aspect-square'} src="" alt=""/>
                        </div>

                        <div className={'flex gap-4 mb-4 justify-center items-center [&>img]:rounded'}>
                            <img className={'w-1/3 bg-blueRob aspect-square'} src="" alt=""/>
                            <img className={'w-1/3 bg-blueRob aspect-square'} src="" alt=""/>
                            <img className={'w-1/3 bg-blueRob aspect-square'} src="" alt=""/>
                        </div>

                        <div className={'text-start'} >
                            <p className={'text-handjet-bold uppercase text-3xl'}>
                                {projects[index].description}
                            </p>
                            <h1 className={'text-anton text-redRob text-5xl uppercase my-3'}>
                                {projects[index].title}</h1>
                            <hr className={'border-2 border-blackRob'}/>

                            <div className={'grid grid-cols-2 gap-2 my-3 [&>p]:text-2xl'}>
                                <p className={'text-handjet-regular'}>
                                    Desarrollé una landing page atractiva y un sistema de administración que permite actualizar
                                    el menú de forma dinámica.
                                </p>

                                <p className={'text-handjet-regular'}>
                                    Machu Picchu necesitaba una presencia digital moderna y funcional que facilitara la gestión
                                    de su menú diario sin depender de procesos manuales.
                                </p>

                            </div>

                        </div>
                    </motion.div>
                </AnimatePresence>

            </section>
        </>
    )
};