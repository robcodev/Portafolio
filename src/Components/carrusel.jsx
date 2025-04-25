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
        <>
        <div className={'overflow-hidden'} ref={emblaRef}>
            <div className={'flex [&>div]:flex-[0_0_100%] [&>div]:rounded '}>
                <div className={'  h-96 border-whiteRob'}>
                    <picture>

                        <img className={'w-full h-full object-cover mx-2 rounded'} src={slide1} alt=""/>
                    </picture>
                </div>

                <div className={' bg-whiteRob h-96 border-whiteRob'}>Slide 2</div>
                <div className={' bg-whiteRob h-96 border-whiteRob'}>Slide 3</div>
            </div>
        </div>
        </>
    )
}