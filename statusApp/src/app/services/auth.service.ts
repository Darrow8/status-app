import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
// import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ){}

  doRegister(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }

  async doLogin(value){
    await this.afAuth.signInWithEmailAndPassword(
      value.username,
      value.password
    ).then(() => {
      console.log("logged in!")
      
    })
  }

  // doLogout(){
  //   return new Promise((resolve, reject) => {
  //     this.afAuth.auth.signOut()
  //     .then(() => {
  //       this.firebaseService.unsubscribeOnLogOut();
  //       resolve();
  //     }).catch((error) => {
  //       console.log(error);
  //       reject();
  //     });
  //   })
  // }
}
