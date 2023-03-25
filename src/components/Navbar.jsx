import React from 'react'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./css/Home.css"

function Navbar(props) {
    let mainClass = "main__nav"
    const snackClicked = () => {
        if(mainClass == "main__nav"){
            mainClass += "responsive"

        }
        else{
            mainClass = "main__nav"
        }
    }
    return (
    <div >
        <div className={mainClass}>
           <ul>
            <li><Link className='lgo' to="/home">bala</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/tutors">Tutors</Link></li>
            <li><Link to="/assessments">Assessments</Link></li>
            {/* <li><Link className='acc'><AccountCircleIcon/></Link></li> */}
           </ul>
        </div>
    </div>
  )
}

export default Navbar