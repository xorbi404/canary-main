import { PeopleAlt } from '@mui/icons-material'
import React from 'react'
import "./css/Caed.css"
function Card(props) {
  return (
    <div>
        <div className='mn__cont'>
            <p>Tutors</p>
            <div className="cont__card">
                <div className="innr">
                    <img src={props.imageUrl} alt="cl__img" className='prof__img'/>
                    <p className='name__ct'>{props.name}</p>

                
                </div>
                <p id="hdr">Subjects</p>
                <p id="hhd">{props.subject1} and {props.subject2}</p>
                <p id='hrs'>Location:{props.area}</p>
                
            </div>
        </div>
    </div>
  )
}

export default Card