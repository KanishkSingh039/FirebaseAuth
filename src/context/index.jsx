import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseconfig";
import { useNavigate } from "react-router-dom";


export const Supercontext=createContext(null);

function Globalcontext({children})
{
    const [inputvalue,setinputvalue]=useState({
        name:"",
        email:"",
        password:"",
    })
    const navigate=useNavigate();
    useEffect(()=>{
        
    })
    function handlesubmit(e)
    {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,inputvalue.email,inputvalue.password).then(r=>{
            r.user.displayName=inputvalue.name;
            console.log(r);
            if(r)
            {
                navigate('/profile');
            }
            
        })
    }
    return(
        <Supercontext.Provider value={{
            inputvalue,
            setinputvalue,
            handlesubmit
        }}>{children}</Supercontext.Provider>

    )
}
export default Globalcontext