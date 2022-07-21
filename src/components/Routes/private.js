/* eslint-disable no-unreachable */
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "../Context/User";


const Private = ({ children }) => {
    const { currentUser } = useUserAuth();
    if (!currentUser) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
};

export default Private;