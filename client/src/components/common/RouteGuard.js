import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext";

export const RouteGuard = ({
    children,
}) => {
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated){
        return <Navigate to='/login' />
    }

    return children ? children : <Outlet />
};