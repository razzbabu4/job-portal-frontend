import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <div>Error is occurred</div>,
        children: [
            {
                path: "/",
                element: <h1>Home</h1>,
            },
            {
                path: "/create-job",
                element: <h1>Job</h1>,
            },
        ]
    },
]);

export default router;