import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import ErrorComponent from "./components/ErrorComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoToTop from "./components/GotoTop";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
      <GoToTop />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
