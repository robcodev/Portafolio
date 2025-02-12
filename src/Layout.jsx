import Header from './Components/header.jsx'
import {Footer} from "./Components/footer.jsx";
import {Outlet} from "react-router-dom";
import './App.css'

export function Layout() {
    return <>
        <Header/>
            <Outlet/>
        <Footer/>
    </>
}