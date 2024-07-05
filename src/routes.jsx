import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NovoVideo from "./pages/NovoVideo";
import Player from "./pages/Player";
import BasePage from "./pages/BasePage";
import NaoEncontrada from "./pages/NaoEncontrada";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<HomePage />}/>
          <Route path="newvideo" element={<NovoVideo />}/>
          <Route path=":id" element={<Player />}/>
          <Route path="*" element={<NaoEncontrada />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
