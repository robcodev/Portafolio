import './App.css';
import './blogDashboard.css'
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Contacto from "./pages/contacto.jsx";
import {Layout} from "./Layout.jsx";
import Portafolio from "./pages/portafolio.jsx";
import {NotFound} from "./pages/404.jsx";
import ProjectPage from "./pages/DynamicPortfolio.jsx";
import Index from "./pages/Index.jsx";
import BlogDashboard from "./pages/blog.jsx";

function App() {

    return (
        <Router>
            <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/portafolio" element={<Portafolio/>}/>
                    <Route path="/blog" element={<BlogDashboard/>}/>
                    <Route path="/contacto" element={<Contacto/>}/>
                    <Route path="/portafolio/:projectId" element={<ProjectPage/>}/>
                    <Route path='*' element={<NotFound/>}/>

            </Routes>
        </Router>
    )
}
export default App
