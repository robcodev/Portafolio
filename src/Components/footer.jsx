import instagram from "../assets/imgs/logosFooter/Instagram_logo_2016.svg";
import linkedIn from "../assets/imgs/logosFooter/LinkedIn_icon.svg";
import gitHub from "../assets/imgs/logosFooter/github-mark.svg";
import {Link} from "react-router-dom";


export function Footer() {

    //         <p className={'text-center text-blackRob font-sans font-light text-sm'}>Hecho por mi mismo</p>
    //         <img className={'w-12 m-auto'} src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/meowth.png"
    //              alt="Meowth"/>

    return (

        <footer className="pt-6 ">
            <div className="mx-auto max-w-screen-xl text-center">

                <ul className="flex flex-wrap justify-center items-center font-bold">
                    <li>
                        <Link to="/" className="gap-2 hover:underline md:mr-6 ">Index</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className="gap-2 hover:underline md:mr-6">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/blog" className="gap-2 hover:underline md:mr-6 ">Blog</Link>
                    </li>
                </ul>

                <div className={' p-5 flex-wrap flex gap-4 justify-center lg:absolute lg:right-8'}>

                    <a href="#"> <img className={'w-6'} src={instagram} alt=""/></a>
                    <a href="#"><img className={'w-6'} src={linkedIn} alt=""/></a>
                    <a href="#"><img className={'w-6'} src={gitHub} alt=""/></a>
                </div>


                <span className="text-xs text-blackRob sm:text-center">© 2024-2025
                    <a href="#"
                       className="hover:underline"> Robert Correa Toro</a>. Todos los derechos reservados.</span>
            </div>


        </footer>

    )
}