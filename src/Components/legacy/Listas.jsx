export function Bullet({titulo, fecha, tituloRojo, lugar, descripcion, className}) {
    let fill = '{fill: #e84141}';
    return <>
        <div className={'basis-2/5 mt-3'}>
            <div className={'flex flex-row'}>
                <h2 className={'text-3xl text-blueRob font-serif font-bold'}>{titulo}</h2>
            </div>

            <div className={'flex flex-row'}>
                {/*    estrella */}
                <figure className={'w-3.5 pt-0.5'}>
                    <svg className={''} id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 7.41 7.08">
                        <defs>
                            <style>
                                .cls-1 {fill}
                            </style>
                        </defs>
                        <g id="Capa_1-2" data-name="Capa 1">
                            <path className="cls-1"
                                  d="M4.04.24l.63,1.95c.05.14.18.24.33.24h2.05c.34,0,.48.44.21.64l-1.66,1.2c-.12.09-.17.25-.13.39l.63,1.95c.11.32-.27.59-.54.39l-1.66-1.2c-.12-.09-.29-.09-.41,0l-1.66,1.2c-.28.2-.65-.07-.54-.39l.63-1.95c.05-.14,0-.3-.13-.39L.15,3.07c-.28-.2-.13-.64.21-.64h2.05c.15,0,.29-.1.33-.24L3.37.24c.11-.32.56-.32.67,0Z"/>
                        </g>
                    </svg>
                </figure>

                {/*    Fecha */}
                <h5 className={'text-sm italic font-sans ps-1'}>{fecha}</h5>
                {/*    fondo rojo*/}
                {/*    texto dentro del fondo rojo*/}
            </div>

            <div className={'flex flex-row pt-1 font-sans font-bold'}>
                <span className={'bg-redRob w-full rounded-full text-sm text-start ps-4'}>
                   {tituloRojo}
                </span>
            </div>


            <div className={'flex flex-row'}>
                <h4 className={'pt-1 ps-1 text-sm'}>
                   {lugar}
                </h4>
            </div>

            <div>
                <p className={'pt-1 ps-1 text-xs text-start sans-serif font-light text-blackRob'}>
                    {descripcion}
                </p>
            </div>
        </div>


        {/*    subtitulo */}
    </>
}