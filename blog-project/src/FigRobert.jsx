import miFoto1 from './assets/imgs/miFoto1.png'
import miFoto2 from './assets/imgs/miFoto2.png'
import hola from './assets/imgs/hola1.png'

export function FigRobert() {
    return <>
        <figure className={'h-full w-full relative'}>
            <img className={'absolute overflow-scroll'} src={miFoto1} alt="reventó"/>
            <img className={'absolute space-y-3'} src={miFoto2} alt="reventó"/>
        </figure>
    </>
}