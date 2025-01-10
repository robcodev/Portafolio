import Header from './Components/header.jsx'
import {Footer} from "./Components/footer.jsx";
import {Outlet} from "react-router-dom";
import './index.css'

export function Layout() {
    return <>

        <Header/>
        <main>
            <Outlet/>
        </main>

        <Footer/>
    </>
}