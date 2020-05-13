import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '',   redirectTo: './tabs/tabs.module#TabsPageModule', pathMatch: 'full'},
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'signup',
    component: RegisterComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
