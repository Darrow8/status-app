import { FirebaseAuthService } from './../services/firebase-auth.service';
import { RegisterModalComponent } from './../register-modal/register-modal.component';
import { User,initalizationUserObj } from './../User';
import { Component, OnInit, Input,Output } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import * as firebase from "firebase"



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form : FormGroup;
  private user : User
  recaptchaVerifier;
  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private fas: FirebaseAuthService
    ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.min(3)]],
      number: [''],
      password: [''],
    });
  }
  //*initialize recaptcha
  ngOnInit() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha',{'size':'invisible'});
  }

  //* Presents modal from register-modal component
  async presentModal() {
    const modal = await this.modalController.create({
      component: RegisterModalComponent
    });
    return await modal.present();
  }

  createUser(){
    //TODO make this
  }

  //* logs the form submitted and converts into user class
  logForm(){
    let val = this.form.value
    let userInterface: initalizationUserObj = {
      name: val["name"],
      nickname: "",
      uid: "",
      phoneNum: val["number"],
      password: val["password"],
      friends: [],
      currentPosts: [],
      status: null,
      timestamp: new Date().getTime()
    }
    this.user = new User(userInterface)

    this.user.returnInfo()
    this.fas.sendConf(this.user.phoneNum,this.recaptchaVerifier)
    //*timeout so that they can see the recaptcha & code can be sent
    setTimeout(()=>{
      this.presentModal()
    },1500)
  }



}
