import {useEffect, useState} from "react";
import supabase from "../utils/supabase.js";

const IndexContentSec = () => {

    return (
        <section
            className="px-4 max-w-screen-xl lg:px-12 grid grid-cols-2 gap-8">
            <div
                className={''}>
                <h2
                    className="mb-4 mt-8 text-2xl font-extrabold tracking-tight leading-tight  text-start text-gray-900 md:text-3xl">
                    Ayudo a las empresas a vender por medios digitales
                </h2>
                <p
                    className="text-md font-normal text-gray-500 lg:text-lg  text-start text-blackRob mb-10">
                    Combino estrategia, diseño y desarrollo para entregar servicios con sentido e integrales.
                </p>
            </div>

            <div className={'grid grid-rows-3 gap-4 *:rounded-lg'}>
                <figure
                    className={'border-redRob border-2 p-6 text-start'}>
                    <h3
                        className={'text-xl font-bold mb-2'}>
                        Estrategia</h3>
                    <p
                    className={'text-xs text-blackRob mb-2'}>
                    SEO - SEM - CONTENT</p>

                    <h4
                        className={'text-md mb-2'}>
                        Planificación enfocada en atraer y convertir.</h4>

                </figure>

                <figure
                    className={'border-redRob border-2 p-6 text-start'}>
                <h3
                        className={'text-xl font-bold mb-2'}>
                        Diseño
                    </h3>
                    <p
                        className={'text-xs text-blackRob mb-2'}>
                        UX/UI - BRANDING - DIGITAL</p>
                    <h4
                        className={'text-md mb-2'}>
                        Historias visuales que conectan y posicionan</h4>


                </figure>

                <figure
                    className={'border-redRob border-2 p-6 text-start'}>
                <h3
                        className={'text-xl font-bold mb-2'}>
                        Desarrollo</h3>
                    <p
                        className={'text-xs text-blackRob mb-2'}>
                        E-COMMERCE - WEB APPS</p>
                    <h4
                        className={'text-md mb-2'}>
                        Plataformas para ofrecer tus servicios o productos.</h4>


                </figure>


            </div>
        </section>
    )
};
export default IndexContentSec