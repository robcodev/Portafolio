export function Componente1({children, className}) {
    return <>
        <div className={''}>
            <img src={children} className={className} alt=""/>
        </div>
    </>
}