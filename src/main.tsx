import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import ErrorPage from "./components/error-page.tsx";
import Quiz from "./components/quiz.tsx";
import StoryBook from "./components/storybook.tsx";
import Reader from "./components/reader.tsx";
import PageLoader from "./components/page-loader.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/generate",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/reader",
    element: <Reader />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/storybook",
    element: <StoryBook />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/loading",
    element: <PageLoader />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
