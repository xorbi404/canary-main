import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "./css/Assessment.css"
import { Link } from 'react-router-dom'
function Assessment() {
  return (
    <div>
        <Navbar/>
        <div className='fl_cont'>
            <div>
                <Link to="/assessments/biology" style={{textDecoration:"none"}}><p style={{cursor:"pointer"}}>Biology papers</p></Link>
    
            </div>
            <div>
            <Link to="/assessments/physics" style={{textDecoration:"none"}}><p style={{cursor:"pointer"}}>Physics papers</p></Link>
            </div>
            <div>
            <Link to="/assessments/chemistry" style={{textDecoration:"none"}}><p style={{cursor:"pointer"}}>Chemistry papers</p></Link>
            </div>
            <div>
            <Link to="/assessments/maths" style={{textDecoration:"none"}}><p style={{cursor:"pointer"}}>Maths papers</p></Link>
            </div>
            <div>
            <Link to="/assessments/english" style={{textDecoration:"none"}}><p style={{cursor:"pointer"}}>English papers</p></Link>
            </div>
            <div>
            <Link to="/assessments/kiswahili" style={{textDecoration:"none"}}><p style={{cursor:"pointer"}}>Kiswahili papers</p></Link>
            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default Assessment