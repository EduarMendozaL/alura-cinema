import Favoritos from "pages/Favoritos";
import NotFound from "pages/NotFound";
import PaginaBase from "pages/PaginaBase";
import Player from "pages/Player";
import Inicio from "pages/inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            {/* Se van a estar manejando rutas desde esta función */}
            <Routes>
                {/* el que tiene todas las rutas en su interior */}
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}>
                        {/* ruta específica */}
                    </Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;