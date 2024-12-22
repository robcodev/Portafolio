import './App.css'
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Contacto from "./pages/contacto.jsx";
import {Layout} from "./Layout.jsx";
import Portfolio from "./pages/portfolio.jsx";
import {NotFound} from "./pages/404.jsx";
import ProjectPage from "./pages/DynamicPortfolio.jsx";
import Index from "./pages/Index.jsx";
import Blog from "./pages/Blog.jsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/contacto" element={<Contacto/>}/>
                    <Route path="/:projectId" element={<ProjectPage/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Route>

            </Routes>
        </Router>
    )
}
export default App
