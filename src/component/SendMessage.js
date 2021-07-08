import React, { useState} from 'react'
import { db, auth } from '../firebase';
import firebase from 'firebase';
import { Button, Input } from '@material-ui/core';
import './SendMessage.css';

export const SendMessage = ({scroll}) => {

    const [msg, setMsg] = useState('');

    async function sendMessage(e) {
        e.preventDefault()
            
            const { uid, photoURL, displayName } = auth.currentUser;
            console.log('auth - ',auth+', displayName = ',displayName); 

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('') 
        scroll.current.scrollIntoView({ behaviour:'smooth'})
        console.log('uid,photoURL:',uid,photoURL);
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <span >
                        <Input className="sendMessage-input" value={msg} onChange={(e)=> setMsg(e.target.value)} placeholder="     Type a message" />
                    </span>
                    
                    <span className="send">
                        <Button  type="submit">Send</Button>
                    </span>
                   
                </div>
                
            </form>
            
        </div>
    )
}

export default SendMessage;
