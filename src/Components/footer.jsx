import instagram from "../assets/imgs/logosFooter/Instagram_logo_2016.svg";
import linkedIn from "../assets/imgs/logosFooter/LinkedIn_icon.svg";
import gitHub from "../assets/imgs/logosFooter/github-mark.svg";

export function Footer() {

    return (

        <footer className="pt-6 ">
            <hr className="border-b-2 my-4"/>

            <div className="mx-auto max-w-screen-xl text-center flex justify-between">
                <h5 className="text-xs text-blackRob sm:text-center font-mono">© 2024-2025&nbsp;
                    <a href="#"
                       className="hover:underline">
                        Robert Correa Toro</a>. Todos los derechos reservados.</h5>

                <div className={' flex gap-4'}>
                    <a href="https://www.instagram.com/diseno_corto"> <img className={'w-6'} src={instagram} alt=""/></a>
                    <a href="https://www.linkedin.com/in/robertcorreat/"><img className={'w-6'} src={linkedIn} alt=""/></a>
                    <a href="https://github.com/Rob-Comp"><img className={'w-6'} src={gitHub} alt=""/></a>
                </div>
            </div>
        </footer>
    )
}