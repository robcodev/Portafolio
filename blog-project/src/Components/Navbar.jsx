import {Link} from "react-router-dom";

export function Navbar() {
    return <>
        <header className={'w-full ms-12'}>
            <div className={'container flex h-8 justify-between'}>
                <nav className={'flex gap-4 sm:gap-6'}>
                    <Link to="/">Inicio</Link>
                    <Link to="/portfolio">Portfolio</Link>
                </nav>
            </div>
        </header>
    </>
}
