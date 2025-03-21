import linkedIn from '../assets/imgs/iconFooter/linkedIn.png'
import arrow from '../assets/imgs/iconFooter/arrow.png'
import blog from '../assets/imgs/iconFooter/blog.png'
import github from '../assets/imgs/iconFooter/gitHub.png'
import supabase from "../utils/supabase.js";
import {useEffect, useState} from "react";


export default function LeftEntry() {

    const [dbData, setDbData] = useState([]);

     const fetchData = async ()=> {
        const {data} = await supabase
            .from('leftEntry')
            .select('*')
            .single()
            setDbData(data);
    }

    useEffect(() => {
        fetchData()
    }, [])


    return <>

        <section
            className={'text-start col-span-1 w-md bg-whiteRob  py-20  h-[100%] rounded relative'}>

            <p className={'text-handjet-bold text-xl uppercase'}>{dbData.name}</p>
            <h1 className={'text-anton text-redRob text-4xl uppercase my-4'}>UX/UI Designer && <br/> Full Stack
                Developer</h1>

            <p className={'text-handjet-regular text-2xl my-4'}>{dbData.title}</p>

            {/*<h2 className={'text-anton text-redRob mt-12 text-2xl'}>Proyectos Recientes</h2>*/}
            {/*<ul className={'list-unstyled text-handjet-regular text-2xl'}>*/}
            {/*    <li>Restaurant Machu Picchu</li>*/}
            {/*    <li>TCG Planet</li>*/}
            {/*</ul>*/}

            <div
                className={'absolute bottom-24 text-handjet-regular text-2xl [&>a]:flex [&>a]:gap-2 [&>a]:w-fit [&>a]:mt-1'}>
                <a href="">
                    <img className={'h-7'} src={arrow} alt=""/>Sobre Mi
                </a>

                <a href="">
                    <img className={'h-7'} src={blog} alt=""/>Blog
                </a>
                <a href="">
                    <img className={'h-7'} src={github} alt=""/>GitHub
                </a>
                <a href="">
                    <img className={'h-7'} src={linkedIn} alt=""/>LinkedIn
                </a>
            </div>
        </section>
    </>;
};