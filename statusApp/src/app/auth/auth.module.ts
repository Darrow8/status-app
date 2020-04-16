import { RegisterComponent } from './../components/register/register.component';
import { LoginComponent } from './../components/login/login.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AuthPageRoutingModule
  ],
  declarations: [AuthPage,LoginComponent,RegisterComponent]
})
export class AuthPageModule {}
