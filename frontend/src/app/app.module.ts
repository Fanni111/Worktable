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
import { CalendarComponent } from './page/calendar/calendar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateTimePickerComponent } from './component/date-time-picker/date-time-picker.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library as fontLibrary } from '@fortawesome/fontawesome-svg-core';
import { faCalendar,  faClock } from '@fortawesome/free-regular-svg-icons';
fontLibrary.add(
  faCalendar,
  faClock
);

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfileFormComponent,
    ProfileComponent,
    LoginComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    RegistrationComponent,
    CalendarComponent,
    DateTimePickerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    NgbModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
