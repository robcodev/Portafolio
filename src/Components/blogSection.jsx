import arrow from '../assets/imgs/arrow.png'
export default function BlogSection(){
    return(
        <>
            <section className={' my-32 '}>
                <h3 className={'text-whiteRob text-3xl text-start text-handjet-bold my-4'}>
                    / Blog
                </h3>
                <div className={'flex justify-between gap-4'}>
                    <article className={'border-2 border-whiteRob rounded-lg p-4 w-1/3'}>
                        <h3 className={'text-start text-whiteRob capitalize text-handjet-regular text-2xl'}>
                            El juego de la vida de Conway
                        </h3>
                        <p className={'text-whiteRob text-handjet-regular text-start mt-4'}>
                            Famoso autómata celular simula la evolución de patrones complejos a partir de reglas
                            simples. Además, te mostraré cómo programarlo en JavaScript y su posible aplicación como
                            fondo dinámico en tu página web.
                        </p>
                        <div className={'flex justify-start mt-4'}>
                            <h4 className={'text-sm h-fit text-center align-baseline bg-whiteRob px-12 py-1 text-handjet-regular rounded-full'}>Leer
                                más...</h4>
                            <img
                                className={'ms-2'}
                                src={arrow} alt=""/>
                        </div>

                    </article>
                </div>
            </section>
        </>
    )
}