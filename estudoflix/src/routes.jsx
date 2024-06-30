import { BrowserRouter, Route, Routes } from "react-router-dom";
import NaoEncontrada from "./pages/NaoEncontrada";
import BasePage from "./pages/BasePage";
import Inicio from "./pages/Inicio";
import NovoVideo from "./pages/NovoVideo";
import Player from './pages/Player';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<Inicio />} />
                    <Route path="novovideo" element={<NovoVideo />} />
                    <Route path=":id" element={<Player />} />
                    <Route path="*" element={<NaoEncontrada />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;