import { RegisterModalComponent } from './../register-modal/register-modal.component';
import { User } from './../User';
import { Component, OnInit, Input,Output } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from "firebase"
import { AngularFireAuth } from 'angularfire2/auth';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  private form : FormGroup;
  private user : User
  recaptchaVerifier;
  @Output() confirmation: firebase.auth.ConfirmationResult;
  otpSent = false
  constructor(
    public modalController: ModalController,
    public af: AngularFireAuth, 
    private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.min(3)]],
      number: [''],
      password: [''],
    });
  }

  ngOnInit() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha',{'size':'invisible'});
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: RegisterModalComponent
    });
    return await modal.present();
  }

  createUser(){
    //TODO make this
  }

  sendConf(phone: string){
    console.log("in conf")
    var phoneNum = phone.toString()
    if(this.convertNum(phoneNum) == "error"){
      console.log("ERROR - Bad Phone Number")
    }else{
      phoneNum = this.convertNum(phoneNum)
    }
    console.log(phoneNum)
    this.af.auth.signInWithPhoneNumber(phoneNum, this.recaptchaVerifier).then((result) =>{
      console.log("signed! Now verification is needed")
      this.otpSent = true

      this.confirmation = result
      this.presentModal()

    }).catch((err) =>{
      console.log(err)
    })
  }
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

  logForm(){
    let val = this.form.value
    this.user = new User(val["name"],"1",val["number"],val["password"],[],"",[],null)
    this.user.returnInfo()
    this.sendConf(this.user.phoneNum)
  }


}
