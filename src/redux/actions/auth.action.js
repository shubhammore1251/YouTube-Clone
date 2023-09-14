import firebase from 'firebase/compat/app';
import auth from '../../firebase';
import Cookies from "js-cookie";

import { LOAD_PROF, LOGIN_FAIL, LOGIN_REQ, LOGIN_SUC, LOGOUT } from '../action-types';


export const login = () => async dispatch =>{

    try {
        
        dispatch({
            type: LOGIN_REQ,
        })

        const provider = new firebase.auth.GoogleAuthProvider();


        //when using Youtube API and want to See, edit, and permanently delete your YouTube videos, ratings, subscriptions , comments and captions then you need below "force-ssl" from youtube api
        provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
    
        const res = await auth.signInWithPopup(provider);
    
        const accessToken = res.credential.accessToken;

        const profile = {
            name: res.additionalUserInfo.profile.name,
            photoURL: res.additionalUserInfo.profile.picture
        }
        
        Cookies.set('ytcl-access-token', accessToken, { expires: 2 });
        Cookies.set('ytcl-user', JSON.stringify(profile), { expires: 2 });

        dispatch({
            type: LOGIN_SUC,
            payload: accessToken
        })

        dispatch({
            type: LOAD_PROF,
            payload: profile
        })

        window.location.reload();

    }catch(error){
      dispatch({
        type: LOGIN_FAIL,
        payload: error.message
      })

    }
}


export const logout = () => async dispatch =>{

    await auth.signOut()

    dispatch({
        type: LOGOUT
    })

    Cookies.remove("ytcl-access-token");
    Cookies.remove("ytcl-user");

    window.location.reload();
}
