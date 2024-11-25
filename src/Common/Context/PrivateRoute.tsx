import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { RouterLink } from "../../Util/RouterLink";
import { useAuth } from "./AuthContext";
interface Props {
    
}
const PrivateRoute : React.FC<Props>=()=> {
    const {user}=useAuth();
    if(user?.role?.roleId !== 2)
        return <Navigate to={RouterLink.Home}/>
    return <Outlet/>
    
}

export default PrivateRoute 