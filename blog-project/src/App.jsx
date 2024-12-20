import './App.css'
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import CVitae from "./pages/cvitae.jsx";
import {Layout} from "./Layout.jsx";
import Portfolio from "./pages/portfolio.jsx";
import {NotFound} from "./pages/404.jsx";
import ProjectPage from "./pages/DynamicPortfolio.jsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<CVitae/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/:projectId" element={<ProjectPage/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Route>

            </Routes>
        </Router>
    )
}
export default App
