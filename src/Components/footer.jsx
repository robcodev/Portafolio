import instagram from "../assets/imgs/logosFooter/Instagram_logo_2016.svg";
import linkedIn from "../assets/imgs/logosFooter/LinkedIn_icon.svg";
import gitHub from "../assets/imgs/logosFooter/github-mark.svg";

export function Footer() {

    return (

        <footer className={''}>
            <div className={'inline-flex justify-center items-center gap-4 mb-4'}>
                <a href="https://www.instagram.com/diseno_corto"> <img className={'w-5'} src={instagram} alt=""/></a>
                <a href="https://www.linkedin.com/in/robertcorreat/"><img className={'w-5'} src={linkedIn} alt=""/></a>
                <a href="https://github.com/Rob-Comp"><img className={'w-5'} src={gitHub} alt=""/></a>
            </div>

            <div className="mx-auto text-center">
                <h5 className="text-xs text-blackRob sm:text-center font-mono">© 2024-2025&nbsp;
                    <a href="#"
                       className="hover:underline">
                        Robert Correa Toro</a>. Todos los derechos reservados.</h5>
            </div>
        </footer>
    )
}