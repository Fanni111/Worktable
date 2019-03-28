import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './service/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from "@angular/common/http";
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ProfileFormComponent } from './component/profile-form/profile-form.component';
import { ProfileComponent } from './page/profile/profile.component';
import { LoginComponent } from './page/login/login.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { RegistrationFormComponent } from './component/registration-form/registration-form.component';
import { RegistrationComponent } from './page/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfileFormComponent,
    ProfileComponent,
    LoginComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
