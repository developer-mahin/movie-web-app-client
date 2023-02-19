import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../Pages/About/AboutUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Movies from "../Pages/Movies/Movies";
import Series from "../Pages/Series/Series";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/movies",
                element: <Movies></Movies>
            },
            {
                path: "/series",
                element: <Series></Series>
            },
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>
            }
        ]
    }
])

export default router;