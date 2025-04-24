export default function SobreMi() {
    return (
        <>
            <section className={'mt-24'}>
                <h3 className={'text-whiteRob text-3xl text-start text-handjet-bold'}>
                    / Sobre mi
                </h3>
                <div>
                    <p className={'text-whiteRob text-handjet-regular text-start leading-tight my-4'}>
                        Especializado en crear experiencias digitales accesibles, escalables y visualmente impactantes.
                    </p>
                    <img
                        className={'rounded-lg border-whiteRob border h-72 w-full'}
                        src="" alt=""/>
                </div>

                {/*    Tarjetas*/}
                <article className={'[&>div]:mt-4'}>
                    <div className={'rounded-lg p-4 bg-whiteRob'}>
                        <h2
                            className={'text-start uppercase'}>
                            Front End
                        </h2>
                        <p
                            className={'text-handjet-regular text-start capitalize'}>
                            React / next.js / vite / tailwindcss / bootstrap / javascript / html5 / css3
                        </p>
                    </div>

                    <div className={'rounded-lg p-4 bg-whiteRob'}>
                        <h2
                            className={'text-start uppercase'}>
                            Back End
                        </h2>
                        <p
                            className={'text-handjet-regular text-start capitalize'}>
                            Node.js / Express.js / PostgreSQL / MongoDB / JWT / api rest                        </p>
                    </div>

                    <div className={'rounded-lg p-4 bg-whiteRob'}>
                        <h2
                            className={'text-start uppercase'}>
                            Dev ops y Despliegue
                        </h2>
                        <p
                            className={'text-handjet-regular text-start capitalize'}>
                            Git / GitHub / Docker (básico) / CI/CD (básico) / Vercel / Netlify / Railway                        </p>
                    </div>
                </article>

                <p className={'text-whiteRob text-handjet-regular text-start mt-4'}>
                    Diseñador gráfico y Desarrollador Full Stack enfocado en experiencias digitales y
                    plataformas web.
                </p>
            </section>
        </>
    )
}