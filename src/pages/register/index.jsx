import { useContext } from "react"
import Commonform from "../../commonform"
import { Supercontext } from "../../context"
import { formcontrol } from "../../formcontrolconfig";
import { Navigate } from "react-router-dom";

function Registerpage()
{
    const {inputvalue,setinputvalue,handlesubmit,user,loading }=useContext(Supercontext);

    console.log(inputvalue);
    if(loading)return<h1>loading</h1>
    if(user) return <Navigate to={"/profile"}/>
    return(
        <Commonform formcontrols={formcontrol} getinputvalue={inputvalue} setgetinputvalue={setinputvalue}
        buttonvalue='save' handlesubmit={handlesubmit}/>
    )
}
export default Registerpage