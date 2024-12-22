import instagram from "../assets/imgs/logosFooter/Instagram_logo_2016.svg";
import linkedIn from "../assets/imgs/logosFooter/LinkedIn_icon.svg";
import gitHub from "../assets/imgs/logosFooter/github-mark.svg";


export function Footer() {
    return <>
        <footer>
            <div className={'mt-5 p-5 flex-wrap flex gap-3 justify-center'}>

                <a href="#"> <img className={'w-6'} src={instagram} alt=""/></a>
                <a href="#"><img className={'w-6'} src={linkedIn} alt=""/></a>
                <a href="#"><img className={'w-6'} src={gitHub} alt=""/></a>
            </div>
            <p className={'text-center text-blackRob font-sans font-light text-sm'}>Hecho por mi mismo</p>
            <img className={'w-12 m-auto'} src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/meowth.png"
                 alt="Meowth"/>
        </footer>
    </>
}