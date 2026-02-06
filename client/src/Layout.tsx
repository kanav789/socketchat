import { Outlet } from "react-router-dom";
import Menu from "./pages/navbar/menu";
const Layout =()=>{
    return (
        <div>
        
        <Outlet />
        <Menu />
        </div>
    )
}

export default Layout;