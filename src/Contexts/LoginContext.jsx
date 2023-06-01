import { createContext, useState } from "react";

export const LoginContext = createContext();

export function LoginProvider ({children}) {

    const [login, setLogin] = useState({});
    const [listadeHabitos, setListadeHabitos] = useState({});

    return (
        <LoginContext.Provider value={{login, setLogin, listadeHabitos,setListadeHabitos}}>
            {children}
        </LoginContext.Provider>
    )
}

