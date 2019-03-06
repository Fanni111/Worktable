import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    //'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=', // admin/password
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private url: string = "http://localhost:8080/users";
  isUserLoggedIn: boolean;
  user: User;

  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;
    this.user = new User();
  }

  async loginUser(user: User){
    //this.user = await this.http.post<User>(this.url + '/login', JSON.stringify(user), httpOptions).toPromise();
    this.isUserLoggedIn = true;
  }

  /*async*/ registerUser(user: User) /*:Promise<void>*/{
    //this.user = await this.http.post<User>(this.url + '/register', JSON.stringify(user), httpOptions).toPromise();
    this.isUserLoggedIn = true;
  }

  

  getUserLoggedIn(): boolean{
    return this.isUserLoggedIn;
  }

  getThisUser(): User{   
    return this.user;
  }

  isUserRoleWorker(): boolean{
    return this.isUserLoggedIn && this.user.role == "WORKER";
  }

  isUserRoleBoss(): boolean{
    return this.isUserLoggedIn && this.user.role == "BOSS";
  }

  logout(){
    this.user = null;
    this.isUserLoggedIn = false;
  }

  setUser(user: User){
    this.user = user;
  }

}
