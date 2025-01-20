import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
const auth = getAuth(app);


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const provider = new GoogleAuthProvider();


    const[photo , setPhoto]= useState("")
    const [user , setUser] = useState('')
    const [loader , setLoader]= useState(true)
    const [open , setOpen] = useState(false)

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
        return signOut(auth)
       }
 
    

     //auth observer
     useEffect(()=>{
 
         const unSubscribe =  onAuthStateChanged(auth , (currentUser)=>{
             setLoader(false)
            setUser(currentUser)
            setPhoto(currentUser?.photoURL)
            
    
           })
          return ()=>{
            unSubscribe()
          }
        },[])
 

       
 

    const info = {createUser,updateUser,login,google,logOut, open,setOpen,user,setUser,photo,setPhoto,loader,setLoader}

    return (
       <AuthContext.Provider value={info}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;