import React from 'react'
import { GoogleAuthProvider ,signInWithPopup,getAdditionalUserInfo, onAuthStateChanged} from 'firebase/auth'
import Button from 'react-bootstrap/Button';
import { auth } from '../firebase.js'
import { useNavigate } from 'react-router-dom';
import {useEffect} from "react"
import {useAuthState} from 'react-firebase-hooks/auth'
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';

import "./css/SignIn.css"
let usDtl = false;
//Signing in as student
function SignIn() {
    const navigate = useNavigate()
    const [userstatus] =  useAuthState(auth)
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        

    
        signInWithPopup(auth,provider)
        .then((res) => {
            const userDetails = getAdditionalUserInfo(res)
            usDtl=userDetails.isNewUser 
           
        }

        )    
        
    }
    
    return (
    <div>
<Link className='lgo' to="/home">bala</Link>
        <Button variant='primary' className='Sn__btn' onClick={signInWithGoogle}>Sign In</Button>
    </div>
  )
}

export default SignIn
export {usDtl}