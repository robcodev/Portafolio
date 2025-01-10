export function NotFound() {
    return (
        <>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold text-blackRob">
                        404
                    </h1>
                    <p
                        className="mb-4 text-3xl tracking-tight font-bold text-blackRob">
                        No sé como llegaste aquí
                    </p>
                    <p className="mb-4 text-lg font-light font-mono text-blackRob">
                        Quieres volver al inicio?
                    </p>
                    <a href="#"
                       className="inline-flex font-mono rounded-lg text-sm px-5 py-2.5 text-center my-4 text-blackRob">
                        Haz click acá
                    </a>
                </div>
            </div>
        </>
    )
}