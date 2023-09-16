import { createContext, useState, useContext, useEffect } from "react";
import {  useGoogleLogin  }  from  '@react-oauth/google' ;

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [token, setToken] = useState("")

    const saveData = (response) => {
        setToken(response.access_token)
        localStorage.setItem('googleToken', response.access_token);
    }

    const loginGoogle = useGoogleLogin({
        onSuccess: credentialResponse  => saveData(credentialResponse)
    });

    const logout = () => {
        setToken("");
        localStorage.removeItem('googleToken');
    }

    useEffect( () => {
        const getToken = localStorage.getItem('googleToken');

        if(getToken){
            setToken(getToken);
        }

    }, [])

    return <AuthContext.Provider value={{ loginGoogle, logout, token }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
} 
