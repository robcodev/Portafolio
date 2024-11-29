import {useTypewriter} from "react-simple-typewriter";


export const Mecanografia = ({classname}) => {
    const [palabras] = useTypewriter({
        words: [`Diseñador\nGráfico`, `Full Stack\nDeveloper`],
        loop: false
    })
    return <>
        <div className={classname}>
            <h1
                className={'whitespace-pre-wrap text-start text-3xl md:text-4xl text-redRob font-serif font-bold text-wrap'}
            >
                {palabras}
            </h1>
        </div>
    </>
}