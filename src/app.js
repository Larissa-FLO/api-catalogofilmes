import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetalhesFilme from "./pages/detalhes";

export default function App(){
    return (
        <>
        
        <Routes>
            <Route  path="/" element={<Home/>}  />
            <Route path="/detalhes/:id" element={<DetalhesFilme />}/>
        </Routes>

        </>
    )
}