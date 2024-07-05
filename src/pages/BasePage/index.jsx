import { Outlet } from "react-router-dom"
import GlobalStyle from "../../components/GlobalStyle/GlobalStyle";
import Header from "../../components/Header";
import VideosProvider from "../../context/Videos/Videos";
import Footer from "../../components/Footer";

const BasePage = () => {
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