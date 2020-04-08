import React from 'react';
import firebase from './firebase';
import {doPatch} from '../HTTPRequest';

class authContextBase{
    constructor(){
        this.token="";
        this.email="";
        this.status="";
    }
    signIn = async (email, password)=>{
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password);
            this.token=await firebase.auth().currentUser.getIdToken(true);
            await doPatch('/login',{
                user:this.email
            },{'AuthToken':this.token});
            this.status="authorized";
        }catch(error){
            console.log(error);
        }finally{}
    };
    signOut = async ()=>{
        try{
            await firebase.auth().signOut();
            this.status="unauthorized";
            this.email="";
            this.token="";
        }catch(error){
            console.log(error);
        }finally{}
    };

}
const auth = new authContextBase();
const authContext=React.createContext(auth);
export {auth};
export default authContext;