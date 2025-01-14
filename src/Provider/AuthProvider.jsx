import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
const auth = getAuth(app);


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const provider = new GoogleAuthProvider();


    const[photo , setPhoto]= useState("")
    const [user , setUser] = useState('')
    const [load , setLoader]= useState(true)

    //create user
    const createUser =(email, password)=>{
        setLoader(true)
        return (
         createUserWithEmailAndPassword(auth, email, password)
        )
     }
      

     //login user
     const login = (email , password)=>{
        setLoader(true)
         return(
             signInWithEmailAndPassword(auth , email , password)
         )
     }
 
 
 
   //update profile
     const updateUser= (updateData)=>{
        setLoader(true)
        return(
             updateProfile(auth.currentUser, updateData)
         )
     }


     //google

     const google = () =>{
        setLoader(true)
        return(
            signInWithPopup(auth, provider)
        )
     }


      //logout
      const logOut =() =>{
        setLoader(true)
        return (signOut(auth))
       }
 
    

     //auth observer
     useEffect(()=>{
 
         const unSubscribe =  onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser)
            setPhoto(currentUser?.photoURL)
            setLoader(false)
    
           })
          return ()=>{
            unSubscribe()
          }
        },[])
 

       
 

    const info = {createUser,updateUser,login,google,logOut,user,setUser,photo,setPhoto,load,setLoader}

    return (
       <AuthContext.Provider value={info}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;