import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import { About } from "./components/About";
import { Error } from "./components/Error";
import { RestroMenuPage } from "./components/RestroMenuPage";
import { Shimmer } from "./components/Shimmer";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<Shimmer/>}><About /></Suspense>,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restromenu/:restroId",
        element: <RestroMenuPage />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
