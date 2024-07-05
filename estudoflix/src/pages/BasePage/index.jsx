import { Outlet } from "react-router-dom"
import GlobalStyle from "../../componentes/GlobalStyle/GlobalStyle";
import Header from "../../componentes/Header";
import VideosProvider from "../../context/Videos/Videos";
import Footer from "../../componentes/Footer";

const BasePage = () => {
    console.log('FormContext carregado');
    return(
        <>
            <GlobalStyle />
            <Header />
                <VideosProvider>
                    <Outlet />
                </VideosProvider>
            <Footer />
        </>
    )
}

export default BasePage;