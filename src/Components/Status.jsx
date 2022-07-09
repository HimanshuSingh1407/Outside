import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";



function Status (){

    const [auth] = useContext(AuthContext);

   

    return auth.isAuth &&  (
        <div>
            <h3>Login Successfully</h3>
            <h3>{auth.token}</h3>
        </div>
    )
}

export default Status;