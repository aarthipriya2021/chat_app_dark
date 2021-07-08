import React from 'react';
import firebase from 'firebase';
import {auth} from '../firebase';

import { Button } from '@material-ui/core';

export const SignIn = () => {

    //TODO create a collection name as accounts with these fields , accountId [ number auto generate ], loginName [ String ],password [ String ] , displayName [ String ], photoURL
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider);
        //TODO check the response from auth.signInWithPopup(provider). if success, check at accounts collection with loginName and password. if not available add an entry into the collection with required data.

    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <span>
            <Button style={{ padding: '20px', fontSize: '20px', borderRadius: '100px', fontWeight: '600', backgroundColor:'#395dff' }} onClick={signInWithGoogle}>Sign In</Button>
            </span>
            
        </div>
    )
}

export default SignIn;
