import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Fts from './Fts'
import { usDtl } from './SignIn'
import SignOut from './SignOut'
import "./css/Home.css"
import Navbar from './Navbar'
import Footer from './Footer'
import "./css/Home.css"
let sStatus = usDtl
function Home() {
  
  
  return (
    <div>
      <Navbar/>
      <div className='main__cont'>
       <h1>Home page</h1>
       </div>
       <Footer/>

    </div>
    
  )
  

  
}
sStatus=false
export {sStatus}
export default Home