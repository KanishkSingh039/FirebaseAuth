import { useContext } from "react"
import Commonform from "../../commonform"
import { Supercontext } from "../../context"
import { formcontrol } from "../../formcontrolconfig";

function Registerpage()
{
    const {inputvalue,setinputvalue,handlesubmit}=useContext(Supercontext);
    console.log(inputvalue);
    return(
        <Commonform formcontrols={formcontrol} getinputvalue={inputvalue} setgetinputvalue={setinputvalue}
        buttonvalue='save' handlesubmit={handlesubmit}/>
    )
}
export default Registerpage