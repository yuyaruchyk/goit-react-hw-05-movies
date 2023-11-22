import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
    return (
        <>
            <nav>
                <Header />
               
                <Outlet />
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;