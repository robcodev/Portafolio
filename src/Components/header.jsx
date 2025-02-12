import robco from '../assets/imgs/RobCo-SVG.svg'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="">
                <Link to={'/'}>
                    <img
                        className={'h-8 m-auto'}
                        src={robco} alt="Logo RobCo"/>
                    <p className={'font-mono text-blackRob'}>
                        Robert Correa Toro
                    </p>
                </Link>

            </nav>
        </header>
    );
};