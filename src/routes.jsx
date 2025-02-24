import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import BasePage from "./Pages/BasePage/BasePage";
import NewVideo from "./Pages/NewVideo/NewVideo";
import NotFound from "./Pages/NotFound/NotFound";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/new-video" element={<NewVideo />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>    
    )
}

export default AppRoutes;