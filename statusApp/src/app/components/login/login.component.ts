import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


interface User {
  email?: string;
  passowrd?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  get username(){
    return this.userForm.get("username")
  }

  // get phoneNumber(){
  //   return this.userForm.get("phoneNumber")
  // }
  
  get password(){
    return this.userForm.get("password")
  }

  public errorMessages = {
    username: [
      { type: 'required', message: 'Username is required' },
      { type: 'maxlength', message: 'Username cant be longer than 100 characters' }
    ],
    // phoneNumber: [
    //   { type: 'required', message: 'Phone number is required' },
    //   { type: 'pattern', message: 'Please enter a valid phone number' }
    // ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'pattern', message: 'Please enter a valid password' }
    ]
  }


  userForm  = this.formBuilder.group({
    username: ['', [Validators.required,Validators.maxLength(50)]],
    // phoneNumber: ['', [Validators.required,Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')]],
    password: ['',[Validators.required,Validators.maxLength(50)]]
  })

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {}

  public submit(){
    console.log(this.userForm.value)
    // user = User(this.userForm.value)
    this.auth.doLogin(this.userForm.value)
  }
}
