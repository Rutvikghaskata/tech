import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import { AppLayout } from "./components/layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPages";
import { getApiData } from "./api/GetApiData";
export const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            errorElement: <ErrorPage />,
            children: [
                { 
                    path: "/", 
                    element: <Home />, 
                },
                { 
                    path: "/about", 
                    element: <About />, 
                },
                { 
                    path: "/movie", 
                    element: <Movie />, 
                    loader: getApiData,
                },
                { 
                    path: "/contact", 
                    element: <Contact />, 
                }
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}


