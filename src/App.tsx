import { createBrowserRouter, RouterProvider } from "react-router";
import "./styles/globals.css";
import {UserHome } from "./pages/user/UserHome";
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import { Landing } from "./pages/Landing";
import { AuthLayout } from "./pages/auth/AuthLayout";
import { UserLayout } from "./pages/user/UserLayout";
import { NotFoundPage } from "./pages/errorPages/NotFoundPage";
import PrivateRouteComponent from "./components/auth/PrivateRoute";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login", 
          element: <Login/>,
        },
        {
          path: "register", 
          element: <Register/>,
        },
      ],
    },

    {
      path: "/user",
      element:  (
        <PrivateRouteComponent>
          <UserLayout />
        </PrivateRouteComponent>
      ),
      children: [
        {
           index: true, // index page for the /user route 
          element: <UserHome/>,
        },
      ],

    },
    {
      path: "*", // Catch-all 404 route
      element: <NotFoundPage />,
    },
  ]);





  return (
    <RouterProvider router={router} />
  );
}

export default App;


// This component uses createBrowserRouter, when we use this, we are essentially creating a router object that can be used with the RouterProvider to achieve the same effect as BrowserRouter.
// Also I use a custom componet (PrivateRouteComponent) to restrict private routes.
