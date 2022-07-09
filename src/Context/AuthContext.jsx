import React, { useState } from "react";
import Navbar from "../Components/Navbar";

export const AuthContext = React.createContext();

function AuthContextProvider ({children}){
  //console.log(children)
    const [auth, setAuth] = useState({
        isAuth: false,
        token: null
    });


    const toggleAuth = ()=> {
        setAuth({...auth, isAuth : !auth.isAuth, token: auth.token ? null : Date.now()}) 
       // console.log(auth)
    };
    
      return (
        <AuthContext.Provider value={[auth, toggleAuth]}>
          {children}
        </AuthContext.Provider>
      );
}


 


export default AuthContextProvider;