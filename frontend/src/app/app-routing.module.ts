import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from "./page/profile/profile.component";
import { LoginComponent } from './page/login/login.component';
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";
import { RegistrationComponent } from "./page/registration/registration.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: NavBarComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
