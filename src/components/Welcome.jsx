import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import SignIn from './SignIn'
import { auth } from '../firebase'
import Navbar from './Navbar'
import Footer from './Footer'
import  {Link} from "react-router-dom"


function Welcome() {
    const [user]  = useAuthState(auth)
    const rdr = useNavigate();
    
  return (
    <div>
    <Navbar/>
      <div className='main__cont'>
        <h1>We are education itself</h1>
        <Link to="/authenticate" className='home__btn'>
          SignIn/SIgnUp
        </Link>
       </div>
       <Footer/>
        
    </div>
  )
}

export default Welcome