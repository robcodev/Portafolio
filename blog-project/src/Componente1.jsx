export function Componente1({children, className}) {
    return <>
        <div>
            <img src={children} className={className} alt=""/>
        </div>
    </>
}