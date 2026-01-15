//import { AoinLoading } from "components/Global";
import { AuthContext } from "../Context/userContext";
import React, { useContext } from "react";
import Login from "../../Component/login";
//import {Urls} from "Constants"
const RequireAuth= ({ children }) => {
    const { state } = useContext(AuthContext);
    console.log(state)
    if(!state.token){
        return <Login />
    }
    return <>{children}</>;
};

export default RequireAuth;