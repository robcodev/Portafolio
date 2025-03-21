import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import supabase from "../utils/supabase.js";

export default function RightEntry() {


    const [dbData, setDbData] = useState({});

    async function fetchData() {
        const {data} = await supabase
            .from('projects')
            .select('*, media(*)')
        setDbData(data);
    }

    useEffect(() => {
        fetchData();
    }, [])


    const [index, setIndex] = useState(0);
    const [scroll, setScroll] = useState(false);

    const handleScroll = (e) => {
        if (!dbData.length || scroll) return;

        setScroll(true);

        if (e.deltaY > 0) {
            setIndex((prevIndex) => (prevIndex + 1) % dbData.length);
        } else {
            setIndex((prevIndex) => (prevIndex === 0 ? dbData.length - 1 : prevIndex - 1));
        }
        setTimeout(() => setScroll(false), 600);
    }


    return (
        <>
            <section className={'overflow-y-scroll py-20 scrollbar-hide col-span-2 bg-whiteRob rounded h-screen '}
                     onWheel={handleScroll}>

                <AnimatePresence mode={'wait'}>

                    {dbData.length > 0 ?
                        dbData.map((item, i) =>
                            i === index && (
                                <motion.div
                                    key={item.id}
                                    className=""
                                    initial={{y: 100, opacity: 0}}
                                    animate={{y: 0, opacity: 1}}
                                    exit={{y: -100, opacity: 0}}
                                    transition={{duration: 0.6}}
                                >
                                    <p className="text-gray-700 mt-2"></p>

                                    <div className={'grid grid-cols-3 gap-4 justify-center items-center mb-4 [&>img]:rounded [&>img]:w-max [&>img]:bg-blueRob [&>img]:h-fit [&>img]:object-cover'}>
                                        {item.media.map((image) => (
                                            <img key={image.id}
                                                 src={image.url}
                                                 className={image.class}
                                                 alt=""/>

                                        ))}

                                    </div>

                                    <div className={'text-start'}>
                                        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                                        <p className={'text-handjet-bold uppercase text-3xl'}>
                                            // {String(item.id).padStart(2, '0')} {item.title}
                                        </p>
                                        <h1 className={'text-anton text-redRob text-5xl uppercase my-3'}>
                                            {item.client}</h1>
                                        <hr className={'border-2 border-blackRob'}/>

                                        <div className={'grid grid-cols-2 gap-2 my-3 [&>p]:text-xl'}>
                                            <p className={'text-handjet-regular'}>
                                                {item.problem}
                                            </p>

                                            <p className={'text-handjet-regular font-bold'}>
                                                {item.solution}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )) : (
                            <div className={'h-[100%]'}></div>
                        )}
                </AnimatePresence>

            </section>
        </>
    )
};