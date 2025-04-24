export default function Proyectos(){
    return (
        <>
            <section className={' mt-10'}>
                <h3 className={'text-whiteRob text-3xl text-start text-handjet-bold my-4'}>
                    / Proyectos
                </h3>
                <div className={''}>
                    <div className={'flex [&>figure]:mb-2 [&>figure]:px-2 gap-2'}>
                        <figure
                            className={'rounded-full bg-whiteRob text-handjet-bold'}>
                            1
                        </figure>
                        <figure
                            className={'rounded-full text-whiteRob border border-whiteRob text-handjet-bold'}>
                            2
                        </figure>
                        <figure
                            className={'rounded-full text-whiteRob border border-whiteRob text-handjet-bold'}>
                            3
                        </figure>
                        <figure
                            className={'rounded-full text-whiteRob border border-whiteRob text-handjet-bold'}>

                        </figure>
                    </div>
                    <img
                        className={'rounded-lg border-whiteRob border h-72 w-full'}
                        src="" alt=""/>
                </div>

            </section>
        </>
    )
}