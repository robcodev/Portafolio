const IndexCtaBanner = () => {
    // Subtítulo:
    //     "Desde diseño hasta desarrollo full stack, ¡estoy listo para tu próximo desafío!"
    //
    // Botón:
    //     "Explora mis proyectos" | "Hablemos de tu idea"
    return (
        <div
            className={'h-28 rounded-xl mb-8'}>
            <div
                className={'border-2 border-redRob rounded-lg m-auto inline-block w-full p-8 text-start'}>
                <div className={''}>
                    <h3 className={'text-2xl font-bold leading-tight mb-2'}>
                        Diseñador y desarrollador en un solo lugar.
                    </h3>

                    <p
                        className={'text-sm leading-tight text-blackRob'}>
                        Desde interfaces intuitivas hasta aplicaciones funcionales, <b>yo me encargo</b>.
                    </p>
                </div>
            </div>
        </div>

    )
}
export default IndexCtaBanner;