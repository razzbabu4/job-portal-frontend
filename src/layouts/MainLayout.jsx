import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar />
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;