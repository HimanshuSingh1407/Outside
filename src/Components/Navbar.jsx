import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";



function Navbar(){

    const [auth, toggleAuth]  = useContext(AuthContext);
    //console.log(auth)

    return (

        <div>
            <button disabled={auth.isAuth===true} onClick={toggleAuth}>Login</button>
            <button disabled={auth.isAuth !==true} onClick={toggleAuth}>Logout</button>
        </div>
    )
}

export default Navbar;