import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import LibraryPage from "../views/LibraryPage";
import ReadingPage from "../views/ReadingPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/library",
        element: <LibraryPage />
    },
    {
        path: "/reads/:title",
        element: <ReadingPage />
    }
])