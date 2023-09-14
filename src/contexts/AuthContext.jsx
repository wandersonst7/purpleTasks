import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [teste, setTeste] = useState("olá");

    return <AuthContext.Provider value={{ teste }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
} 
