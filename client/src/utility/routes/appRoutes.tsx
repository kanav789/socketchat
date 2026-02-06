"use client"
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/home";
import Login from "../../pages/auth/login/Login";
import ROUTES from "./routes"
import Chat from "../../pages/chat/chat";
import ProtectedRoute from "../protector/protectorRoutes";
import Layout from "../../Layout";

const AppRoutes = () => {
    return (
        <Routes>
            
            <Route path={ROUTES.login} element={<Login />} />
           
           <Route element={<Layout/>}>  
           <Route path={ROUTES.home} element={
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>
           } />
             
           </Route>
           <Route path={ROUTES.chat} element={
                <ProtectedRoute>
                    <Chat />
                </ProtectedRoute>
            } />
            <Route path={ROUTES.notfound} element={<div>Not Found</div>} />

        </Routes>

    )
}

export default AppRoutes;