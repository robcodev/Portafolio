import flechaIcon from '../assets/imgs/flechaComponent1.png'


import BlogSection from "../Components/blogSection.jsx";
import EmblaCarousel from "../Components/carrusel.jsx";
import Rrss from "../Components/rrss.jsx";
import Header from "../Components/header.jsx";
import Footer from "../Components/footer.jsx";
import {Link} from "react-router-dom";

export default function Index() {

    return (
        <main className={'xl: '}>
        <Header/>


                <section className={'my-36'}>

                    <div className={' '}>
                        <div className={'flex justify-between w-full gap-8'}>
                            <h1 className={'text-redRob text-nowrap text-anton text-8xl text-start'}>UX/UI DESIGNER
                                &&</h1>
                            <Link className={'w-full rounded-full flex gap-4 items-center justify-center '}
                                to={'/portafolio'}>
                                <h3 className={'uppercase text-4xl text-center bg-whiteRob rounded-full w-full h-fit text-[#070914] text-anton my-4 p-3.5 '}>Ver
                                    Portafolio</h3>
                                <picture>
                                    <img
                                        className={'h-full w-full'}
                                        src={flechaIcon} alt="flecha"/>
                                </picture>
                            </Link>

                        </div>
                        <div className={'flex justify-between items-center w-full gap-4 mb-4'}>
                           <div className={'w-full xl:h-[84px] bg-whiteRob rounded-full'}></div>
                            <h2 className={'text-redRob text-nowrap text-anton text-8xl text-end'}>FULL STACK
                                DEVELOPER</h2>
                        </div>
                    </div>
                    <Rrss/>

                    {/*    carrusel? ? */}

                </section>

                <EmblaCarousel/>

                <BlogSection/>



        <Footer/>

        </main>
    );
}
