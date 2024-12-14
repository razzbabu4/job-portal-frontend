import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../layouts/Dashboard";
import AddJob from "../pages/AddJob";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <div>Error is occurred</div>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        errorElement: <div>Error is occurred</div>,
        children: [
            {
                path: "addJob",
                element: <AddJob />,
            },
        ]
    },
]);

export default router;