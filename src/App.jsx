import React from "react"
import './App.css'
import Chat from "./components/Chat"
import SignIn from "./components/SignIn"
import SignOut from "./components/SignOut"
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from "./firebase.js"
import Home from "./components/Home"
import { redirect, Route, Routes } from "react-router-dom"
import Fts from "./components/Fts"
import Welcome from "./components/Welcome"
import Tutors from "./components/Tutors"
import Assessment from "./components/Assessment"
import Exams from "./components/Exams"
import Videos from "./components/Videos"
function App() {
 const [user] = useAuthState(auth);

  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/fts"   element={<Fts/>}/>
      <Route path="/authenticate" element={<SignIn/>}/>
      <Route path="/tutors" element={<Tutors/>}/>
      <Route path="/assessments" element={<Assessment/>}/>
      <Route path="/assessments/:slug" element={<Exams/>}/>
      <Route path="/videos" element={<Videos/>}/>
     </Routes>
    
    </div>
  )
}

export default App
