import {Typewriter, useTypewriter} from "react-simple-typewriter";


export const Mecanografia = () => {
    const [palabras] = useTypewriter({
        words: ['Diseñador Gráfico', 'Desarrollador Full Stack'],
        loop: false,
    })
    return <>
        <div className={'basis-3/5 mt-2 w-full h-full'}>
            <h1
                className={'text-start text-4xl text-redRob font-serif font-bold fixed'}
            >
                {palabras}
            </h1>
        </div>
    </>
}