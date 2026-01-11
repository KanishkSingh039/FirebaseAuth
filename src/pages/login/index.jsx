import { useContext } from "react"
import { Supercontext } from "../../context"
import Commonform from "../../commonform";
import { logincontrols } from "../../formcontrolconfig";
import { Navigate } from "react-router-dom";
function Loginpage()
{
    const {login,setlogin,handleloginsubmit,user,loading}=useContext(Supercontext);
    if(loading)return<h1>loading</h1>
    if(user) return <Navigate to={"/profile"}/>
    return(
            <Commonform
            formcontrols={logincontrols}
            getinputvalue={login}
            setgetinputvalue={setlogin}
            buttonvalue='login'
            handlesubmit={handleloginsubmit}
            />
    )
}
export default Loginpage