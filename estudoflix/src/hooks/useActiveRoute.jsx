import { useLocation } from "react-router-dom"

const useActiveRoute = (path) => {
    const location = useLocation();
    return location.pathname === path;
};

export default useActiveRoute;