import { Button } from '@mui/material'
import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
function SignOut() {
    const navigate = useNavigate()  
  const logoutFunc = () =>{
        signOut(auth)
        .then(
          () => {
            navigate("/authenticate")
            console.log("Successful logout")
          }
          
        )
        .catch((error)=> console.error(error))
}
  return (
    <div>
      SignOutComponent
        <Button onClick={logoutFunc}>Logout</Button>
   
    </div>
  )
}
export default SignOut