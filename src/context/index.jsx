import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseconfig";
import { useNavigate } from "react-router-dom";


export const Supercontext=createContext(null);
function Globalcontext({children})
{
    const [login,setlogin]=useState({
        email:'',
        password:''
    })
    const [user,setuser]=useState(null);
    const [inputvalue,setinputvalue]=useState({
        name:"",
        email:"",
        password:"",
    })
    const [loading,setloading]=useState(true);
    const navigate=useNavigate();
    useEffect(()=>{
        //onauthstatechanged uses to get the current user it may help in many things like getting info about the current user or using the current user we may redirect the user to profile until they loged out
     const checkauthstate=onAuthStateChanged(auth,(currentuser)=>{
        setuser(currentuser);
        setloading(false);
     })
     return ()=>checkauthstate();
    },[]);
    console.log(user);
    function handlesubmit(e)
    {
        e.preventDefault();
        //createUserWithEmailAndPassword uses to save the email and pass in firebase or to register account it gives us a result we helps us to see the stored data
        createUserWithEmailAndPassword(auth,inputvalue.email,inputvalue.password).then(result=>{
            if(result.user)
            {
                //updateCurrentuser uses to update the stored properties of user
                updateCurrentUser(result.user,{
                    displayName:inputvalue?.name
                })
            }
            console.log(result);
            if(result)
            {
                navigate('/profile');
            }
            
        })}
        function handleloginsubmit(e)
        {
            e.preventDefault();
           // signInWithEmailAndPassword this uses to sign in through the email and pass or in otherwords it uses to verify the email and pass to get sign in and it storeds the state as logged in until user gets logged out or it store the present user as current user 
            signInWithEmailAndPassword(auth,login.email,login.password).then(r=>{
                console.log(r);
                if(r) navigate('/profile');
            })

        }
        function handlelogout()
        {
            // Signout uses to update stored state from logged in to logged out or it replaces the current user with null 
            return signOut(auth);
        }
    
    return(
        <Supercontext.Provider value={{
            inputvalue,
            setinputvalue,
            handlesubmit,
            handleloginsubmit,
            login,
            setlogin,
            user,
            handlelogout,
            loading
        }}>{children}</Supercontext.Provider>

    )
}
export default Globalcontext