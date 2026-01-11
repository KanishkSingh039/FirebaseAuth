import { useContext } from "react"
import { Supercontext } from "../../context"

function Profilepage()
{
    const {user,handlelogout , loading}=useContext(Supercontext);
    console.log("Profilepage rendered");
    if(loading) return <h1>loading</h1>
    return(
        <div>
            <h1>{user?.displayName}</h1>
            <h1>{user?.email}</h1>
            <button onClick={handlelogout}>Logout</button>
        </div>
    )
}
export default Profilepage