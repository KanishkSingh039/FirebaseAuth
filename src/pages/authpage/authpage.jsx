import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { Supercontext } from "../../context";

function Authpage({children})
{
    const{user}=useContext(Supercontext);
    if(user) return children;
    return <Navigate to={'/login'}/>
}
export default Authpage