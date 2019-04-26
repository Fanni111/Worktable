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
import { CalendarViewComponent } from './component/calendar-view/calendar-view.component';

//új cal-viewhoz
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { AppService } from './component/calendar-view/calendar-service';
import { MatProgressSpinnerModule } from '@angular/material';
import {LOCALE_ID } from '@angular/core';

import {OverlayContainer} from "@angular/cdk/overlay";



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
    DateTimePickerComponent,
    CalendarViewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    NgbModule.forRoot(),
    FontAwesomeModule,

    //új calendar-viewhoz
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange' }),
    MatProgressSpinnerModule



  ],
  providers: [
    UserService,
  //új calendar-viewhoz
  AppService,
    { provide: LOCALE_ID, useValue: 'en-US' },


    /*UserService,
    {provide: UserService, userclass: UserService}*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
