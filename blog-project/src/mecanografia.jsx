import {useTypewriter} from "react-simple-typewriter";


export const Mecanografia = ({classname}) => {
    const [palabras] = useTypewriter({
        words: ['Diseñador Gráfico', 'Desarrollador Full Stack'],
        loop: false,
    })
    return <>
        <div className={classname}>
            <h1
                className={'text-start text-3xl text-redRob font-serif font-bold text-wrap'}
            >
                {palabras}
            </h1>
        </div>
    </>
}