import robco from '../assets/imgs/RobCo-SVG.svg'
import {useState} from "react";
import ModalContacto from "./modalContacto.jsx";
import {Link} from "react-router-dom";
import {motion} from "motion/react";


export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header>
            <nav className="flex justify-between">
                <Link to={'/'}>
                    <img className={'h-8'} src={robco} alt="Logo RobCo"/>
                </Link>

                <motion.button id="modalTrigger"
                               className="px-5 py-1 font-bold border-redRob border-2 font-mono rounded-full transition duration-700 hover:bg-redRob hover:text-whiteRob hover:duration-300"
                               onClick={() => setOpen(true)}
                               whileHover={{ scale: 1.1 }}
                >
                    Contacto
                </motion.button>
            </nav>
            <hr className="border-b-2 my-8"/>
            <ModalContacto open={open} onClose={() => setOpen(false)}/>
        </header>

    );
};