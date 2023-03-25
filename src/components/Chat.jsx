import React from 'react'
import {useState,useEffect} from "react"
import { db } from '../firebase.js'
import SignOut from './SignOut'
import { collection,query,onSnapshot, orderBy } from 'firebase/firestore'
import SendMessage from './SendMessage.jsx'

function Chat() {
    const [messages,setMessages] = useState([])
    
   useEffect(() => {
   
    
    const q = query(collection(db,"chats"))
    
    const unsubscribe = onSnapshot(q,(snap) => {
    
       
        setMessages(snap.docs.map(doc => doc.data()))
      
    })
    
   
   },[]) 
   
   
    return (
    <div>
        <SignOut/>
        
       {
        messages.map(({id,text,photoURL,uid}) => (
            <div  key={id} className={`msg ${uid == auth.currentUser ? "sent":"received"}`}>
            <p>{text}</p>
            <img src={photoURL} alt="" />
           </div>
            
        ))
       }
       <SendMessage/>
    </div>
  )
}

export default Chat