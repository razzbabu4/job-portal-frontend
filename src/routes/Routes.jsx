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
                element: <div>Hello world!</div>,
            },
            {
                path: "/two",
                element: <div>Hi world!</div>,
            },
        ]
    },
]);

export default router;