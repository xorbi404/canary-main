import React from 'react'
import { useNavigate } from 'react-router-dom'
import { sStatus } from './Home'
function Fts() {
  const nvgt = useNavigate()
  if(sStatus == false){
    nvgt("/home")
  }
  return (
    <div>This is the first time survey component</div>
  )
}

export default Fts