import { FirebaseAuthService } from './../services/firebase-auth.service';
// import { RegisterComponent } from './../register/register.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input, Output } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from "firebase"

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss'],
})


export class RegisterModalComponent {
  public confirm : FormGroup;
  // @Input() confirmation: firebase.auth.ConfirmationResult;

  constructor(private formBuilder: FormBuilder,public modalController: ModalController, public fas: FirebaseAuthService) {
    this.confirm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.min(3)]],
    });
  }

  //* Is called after code is submitted
  submitting(){
    // console.log("here!")
    console.log("code has been submitted")
    let code = this.confirm.value["code"]
    console.log(code)
    this.fas.confirmResult(code)
  }

}
