import React from 'react';
import {auth } from '../firebase';
// import firebase from 'firebase';

import { Button } from '@material-ui/core';


export const SignOut = () => {
  
    return (
        <div>
            <div className="header-chat ">
                <img src={auth.currentUser.photoURL} alt="" />
                <span style={{display:'flex', position:'fixed', marginTop:'29px', marginLeft:'-40px', fontWeight:'600', color:'#395dff', fontFamily:'sans-serif' }}>{auth.currentUser.displayName}</span>
            </div>
            
            <span>
                <Button style={{ position:'fixed', display: 'flex',padding: '12px', fontSize: '13px', borderRadius: '100px', fontWeight: '549', backgroundColor:'#395dff', margin:'-8% 0px 0px 89.5em'}} onClick={() => auth.signOut()}>Sign out</Button>
            </span>
        </div>    
            
    )
}

export default SignOut
