import { Outlet, useLocation } from "react-router-dom";
import { Route } from "../../routes/routes.types";
import { customMatchRoutes } from "../../routes/routes.utils";

interface ContentProps {
    route: Route;
    element: React.ReactNode;
}

export const Content = ({route, element}: ContentProps) => {
    const location = useLocation()

    const isActiveRoute = customMatchRoutes(route.path, location.pathname, true);

    const renderElement = element && isActiveRoute ? <>{element}</> : <Outlet/>

    // a fazer: istabparentroute

    return renderElement;
}