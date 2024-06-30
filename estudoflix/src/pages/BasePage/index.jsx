import GlobalStyle from "../../components/GlobalStyles";
import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import VideosProvider from "../../context/Videos";

const BasePage = () => {
    return (
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