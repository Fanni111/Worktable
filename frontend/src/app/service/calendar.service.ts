import { Injectable } from '@angular/core';
import { Calendar } from '../model/calendar';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    //'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=', // admin/password
  })
};


@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private url: string = "http://localhost:8080/usercalendar";
  isUserLoggedIn: boolean;
  calendar: Calendar;

  constructor(private http: HttpClient) {
    //this.isUserLoggedIn = true;
    this.calendar = new Calendar();
  }

  async addStartDate(calendar: Calendar){
    //console.log("USER: "+user.username +"status: "+this.getUserLoggedIn());
    //this.user = user;
    this.calendar = await this.http.post<Calendar>(this.url + '/addDays', JSON.stringify(calendar), httpOptions).toPromise();
    this.isUserLoggedIn = true;
    /*console.log("USER: "+this.user);*/
  }

}
