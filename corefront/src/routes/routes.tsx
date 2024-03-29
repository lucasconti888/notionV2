import {
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Routes } from "./routes.types";
import { Content } from "../layout/content/content.component";
import { Home } from "../pages/inicio";

const createRouteObject = (routes: Routes): RouteObject[] =>
  Object.values(routes).map((route) => ({
    ...route,
    element: (
      // <SecureRoute role={route.role}>
      <Content route={route} element={route.element} />
    ),
    children: route.children && createRouteObject(route.children),
  }));

export const routes = {
  // dash: {name: "Dash", path: "/dash", children: }
};

// a fazer: corporate router

const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      ...createRouteObject(routes),
    ],
  },
]);

export const BaseRoutes = () => {
  return <RouterProvider router={router} />;
};
