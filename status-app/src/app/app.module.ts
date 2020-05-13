import { FeedCellComponent } from './tab1/feed-cell/feed-cell.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { RegisterComponent } from './register/register.component';
import { Post } from './Post';
import { User } from './User';
import { LoginComponent } from './login/login.component';
import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule} from 'angularfire2/firestore'
// import { AngularFirestore} from '@angular/fire/firestore'


import { environment } from '../environments/environment';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedDirective } from './directives/feed.directive';

@Injectable()
@NgModule({
  declarations: [AppComponent, LoginComponent, 
    RegisterComponent,RegisterModalComponent,
    LandingComponent,
    FeedDirective],
  entryComponents: [RegisterModalComponent],
  imports: [
    BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    // AngularFirestoreDocument,
    // AngularFirestore
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
