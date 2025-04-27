import useEmblaCarousel from 'embla-carousel-react'
import slide1 from '../assets/imgs/heroSec.jpg'
import Autoplay from "embla-carousel-autoplay";

export default function EmblaCarousel(){
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        skipSnaps: true,
    },[Autoplay({
        delay: 4000
    })]);

    return (
        <section className={'relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[42rem] w-screen'}>
            <h3 className={'text-whiteRob uppercase text-xl text-handjet-bold my-4 text-center'}>
                Trabajo Reciente
            </h3>
            <div className={'overflow-hidden absolute w-screen'} ref={emblaRef}>
                <div className={'flex [&>div]:flex-[0_0_auto] gap-3 [&>div]:h-120  [&>div]:rounded '}>
                    <div className={'   border-whiteRob '}>
                        {/*Aqui se traen los datos desde la db*/}
                        <picture className={'aspect-square'}>

                            <img className={'w-full h-full object-cover rounded'} src={slide1} alt=""/>
                        </picture>
                    </div>

                    <div className={' bg-whiteRob border-whiteRob'}>Slide 2</div>

                    <div className={' bg-whiteRob  border-whiteRob'}>Slide 3</div>
                    <div className={' bg-whiteRob  border-whiteRob'}>Slide 3</div>
                    <div className={' bg-whiteRob  border-whiteRob'}>Slide 3</div>
                    <div className={' bg-whiteRob  border-whiteRob me-3'}>Slide 3</div>
                </div>
            </div>
        </section>
    )
}