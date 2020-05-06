import { RegisterComponent } from './../register/register.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input, Output } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from "firebase"

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss'],
})


export class RegisterModalComponent implements OnInit {
  public confirm : FormGroup;
  // @Input() confirmation: firebase.auth.ConfirmationResult;

  constructor(private formBuilder: FormBuilder,public modalController: ModalController) {
    this.confirm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.min(3)]],
    });

  }

  ngOnInit() {
    // console.log(this.confirmation)
  }

  submitting(){
    console.log("here!")
    this.modalController.dismiss({
      'dismissed': true
    })
    console.log("code is " + this.confirm.value["code"])
    // this.confirmation.confirm(this.confirm.value["code"]).then((result) =>{
    //   console.log("done!")
    // }).catch((err) =>{
    //   console.log(err)
    // })
  }

}
