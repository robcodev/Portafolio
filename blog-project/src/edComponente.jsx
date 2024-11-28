import {EmptyStar} from "./emptyStar.jsx";


export function EdComponente({titulo, img, descripcion, estrellitas}) {

    return <>
        <section className={'grid-cols-2 grid first:mt-4 gap-4'}>
            <h2 className={'col-span-2 text-3xl text-blueRob font-serif font-bold mb-4'}>{titulo}</h2>

            <div className={'flex flex-wrap'}>

                <figure className={'w-5'}>
                    <img src={img} alt=""/>
                </figure>


                <p className={'align-top pt-0.5 ps-2 text-xs text-start sans-serif font-light text-blackRob'}
                >
                    {descripcion}
                </p>

                <figure className={'w-14 inline-flex ms-2'}>
                    <EmptyStar/>
                    <EmptyStar/>
                    <EmptyStar/>
                    <EmptyStar/>
                    <EmptyStar/>
                </figure>


            </div>
        </section>

    </>
}