import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Project from "./Pages/Project.jsx";
import ContactMe from "./Pages/ContactMe.jsx";
import Certificate from "./Pages/Certificate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/certificates",
        element: <Certificate />,
      },
      {
        path: "/contact",
        element: <ContactMe />,
      },
      {
        index: true, // This will match the `/` path and redirect it to `/home`
        element: <Navigate to="/home" replace />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
