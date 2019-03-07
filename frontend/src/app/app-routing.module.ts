import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './component/login-component/login-component.component';
import { ProfileComponent } from './component/profile/profile.component';
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

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
    component: LoginComponentComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
