import { createBrowserRouter } from "react-router-dom";
import SingleMovieSection from "../Components/SingleMovieSection/SingleMovieSection";
import Main from "../Layout/Main";
import AboutUs from "../Pages/About/AboutUs";
import AddMovie from "../Pages/AddMovie/AddMovie";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllMovieSection from "../Pages/Home/AllMovieSection";
import Home from "../Pages/Home/Home";
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
                element: <AllMovieSection></AllMovieSection>
            },
            {
                path: "/add-movie",
                element: <AddMovie></AddMovie>
            },
            {
                path: "/series",
                element: <Series></Series>
            },
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/get-single/:id",
                element: <SingleMovieSection></SingleMovieSection>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/get-single/${params.id}`)
                }
            }
        ]
    }
])

export default router;