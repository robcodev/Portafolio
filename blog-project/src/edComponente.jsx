import {EmptyStar} from "./emptyStar.jsx";


export function EdComponente({titulo, img, descripcion, estrellitas}) {

    let mostrarEstrellas;

    if (estrellitas === 'si') {
        mostrarEstrellas = <EmptyStar/>
    }else{
        mostrarEstrellas
    }
    return <>
        <section className={'mt-4'}>
            <div className={'flex flex-wrap'}>

                <figure className={'w-5 '}>
                    <img src={img} alt=""/>
                </figure>


                <p className={'align-top pt-0.5 ps-3 text-sm text-start sans-serif font-light text-blackRob'}
                >
                    {descripcion}
                </p>

                <figure className={''}>
                    {mostrarEstrellas}
                </figure>


            </div>
        </section>

    </>
}