import { AngularFireAuth } from 'angularfire2/auth';
import { ModalController } from '@ionic/angular';
import * as firebase from "firebase"
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  confirmation: firebase.auth.ConfirmationResult;
  otpSent = false

  constructor(public modalController: ModalController,
    public af: AngularFireAuth, ) { }

  //*Converting the phone number to the correct format: +1 XXX-XXX-XXXX
  //* thanks to: https://stackoverflow.com/questions/8358084/regular-expression-to-reformat-a-us-phone-number-in-javascript
  convertNum(number: string){
    var cleaned = ('' + number).replace(/\D/g, '')
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      // var intlCode = (match[1] ? '+1 ' : '')
      return ['+1 ', match[2], '-', match[3], '-', match[4]].join('')
    }
    return "error"
  }

  initRecap(recaptcha: firebase.auth.ApplicationVerifier,name: String){
    new firebase.auth.RecaptchaVerifier(name,{'size':'invisible'});
  }

    //* Sends confirming code & calls presentModal()
    sendConf(phone: string,recaptcha: firebase.auth.ApplicationVerifier){
      console.log("in conf")
      var phoneNum = phone.toString()
      if(this.convertNum(phoneNum) == "error"){
        console.log("ERROR - Bad Phone Number")
      }else{
        phoneNum = this.convertNum(phoneNum)
      }
      console.log(phoneNum)
      
      this.af.auth.signInWithPhoneNumber(phoneNum, recaptcha).then((result) =>{
        console.log("signed! Now verification is needed")
        this.otpSent = true
  
        this.confirmation = result
  
      }).catch((err) =>{
        console.log(err)
      })
    }

    //* confirms the auth code provided
    confirmResult(code){
      console.log("code is " + code)
      this.confirmation.confirm(String(code)).then((result) =>{
        console.log("done!")
        this.modalController.dismiss({
          'dismissed': true
        })
      }).catch((err) =>{
        console.log(err)
      })
    }
}
