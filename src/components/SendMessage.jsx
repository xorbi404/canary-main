import React from 'react'
import { Input,Button } from '@mui/material'
import { useState } from 'react'
import {db,auth} from "../firebase.js"
import { collection,addDoc } from 'firebase/firestore'
import { serverTimestamp } from 'firebase/firestore'

 function SendMessage() {
  const [msg,setMsg] = useState("")
  async  function onMsgSubmit(e){
       e.preventDefault()
       const {uid,photoURL}  = auth.currentUser
       const cont = collection(db,"chats")
       await addDoc(cont,{
 
        text:msg,
        photoURL,
        uid,
        createdAt:serverTimestamp(),
        
       })
       console.log(photoURL)
       setMsg("")
    }
    return (
    <div>
<form onSubmit={onMsgSubmit}>
        <Input placeholder="input" value={msg} onChange={(e) => setMsg(e.target.value)} />
        <Button type="Submit">Send</Button>
</form>
    </div>

  )
}

export default SendMessage