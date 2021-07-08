import React, { useState, useEffect, useRef} from 'react';
import { auth, db} from '../firebase';
import { SignOut} from './SignOut';
import { SendMessage} from './SendMessage';

export const Chat = () => {

    const scroll = useRef()
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    
    return (
        <div>
            {/* <div className='header-chat'>
                <span>
                    <img src={auth.currentUser.photoURL} alt="" />
                </span>
                <span style={{display:'flex', position:'fixed', marginTop:'29px', marginLeft:'-30px', fontWeight:'600', color:'#395dff', fontFamily:'sans-serif' }}>{auth.currentUser.displayName}</span>
            </div> */}
            <div>
                <SignOut />
            </div>
            
            
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid}) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        
                        </div>
                    </div>
                    
                ))}
            </div>
            
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
            
        </div>
    )
}

export default Chat;
 