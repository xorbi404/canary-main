import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { ExamsData } from '../ExamsData'
import "./css/Exams.css"
import Footer from './Footer'
import Navbar from './Navbar'
import {Link} from "react-router-dom"
function Exams() {
  const {slug} = useParams()
  const [selected,setSelected] = useState("Form 1")
  const dataArr = ["maths","physics","chemistry","biology","english","kiswahili"]
  if(!dataArr.includes(slug)){
    return(
      <h1>No such page exists</h1>
    )
  }
  return (
    <div>
      <Navbar/>
      <select
      value={selected}
      onChange={e => setSelected(e.target.value)} 
    >
      <option value="Form 1">Form 1</option>
      <option value="Form 2">Form 2</option>
      <option value="Form 3">Form 3</option>
      <option value="Form 4">Form 4</option>
    </select>
    : {selected}
      
        <div className="fl__cont1">
         
          {ExamsData.map(dat => (
            dat.form == selected && dat.subject==slug ? <div id="frm"><Link style={{textDecoration:"none",color:"black",padding:"20px",borderRadius:"5px",background:"#32f045"}} to={dat.url} target="_blank"> {dat.name}</Link></div>:console.log("this would never happen")
          ))}
        </div>
    <Footer/>
    </div>

  )
}

export default Exams