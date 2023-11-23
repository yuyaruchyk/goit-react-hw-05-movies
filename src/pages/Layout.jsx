import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";


const Layout = () => {
    return (
        <>
            <nav>
                <Header />
               
                
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;