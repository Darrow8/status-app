import { User } from './../User';
import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent{
  public form : FormGroup;
  public user : User
  // public recaptchaVerifier:firebase.auth.RecaptchaVerifier;


  constructor( private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.min(3)]],
      number: [''],
      password: [''],
    });
  }


  logForm(){
    let val = this.form.value
    let userObj = {
      name: val["name"],
      uid: "",
      phoneNum: val["number"],
      password: val["password"]
    }
    this.user = new User(userObj as any)
    this.user.returnInfo()
  }

}
