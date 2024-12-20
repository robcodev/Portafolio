import {Navbar} from "./Components/Navbar.jsx";
import {Footer} from "./Components/footer.jsx";
import {Outlet} from "react-router-dom";

export function Layout() {
    return <>
        <Navbar/>
        <main>
            <Outlet/>
        </main>

        <Footer/>
    </>
}