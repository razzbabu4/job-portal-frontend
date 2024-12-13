import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

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
            {
                path: "/create-job",
                element: <h1>Job</h1>,
            },
        ]
    },
]);

export default router;