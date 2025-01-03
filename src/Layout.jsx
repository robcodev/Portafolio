import {Navbar} from "./Components/Navbar.jsx";
import {Footer} from "./Components/footer.jsx";
import {Outlet} from "react-router-dom";
import './index.css'

export function Layout() {
    return <>
        <body className={'flex flex-col justify-between'}>
        <Navbar/>
        <main>
            <Outlet/>
        </main>

        <Footer/>
        </body>
    </>
}