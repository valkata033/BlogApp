import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

import * as authService from '../services/authService';
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext(); 

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();

    const [auth, setAuth] = useLocalStorage('auth', {});
    const [errors, setErrors] = useState({});

    const onLoginSubmit = async (data) => {
        try{
            const result = await authService.login(data);
            
            setAuth(result);

            setErrors({});
            navigate('/');
        }
        catch (error){
            setErrors(error);
        }
    };

    const onRegisterSubmit = async (data) => {
        const {confirmPassword, ...registerData} = data;

        if(confirmPassword !== registerData.password){
            setErrors({message: 'Password and confirm password don\'t match!'});
            return;
        };

        try{
            const result = await authService.register(registerData);

            setAuth(result);

            setErrors({});
            navigate('/');
        }
        catch(error) {
            setErrors(error);
        }

    };

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        errors: errors,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};