import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  public user: User;
  public username: String;
  public email: String;
  public role: String;

  constructor(private userService: UserService) { 
    this.user = userService.getThisUser();
    this.username = this.user.username;
    console.log("This: "+ this.username +" and: "+ this.user.username);
    this.email = this.user.email;
    this.role = this.user.role;
  }

  ngOnInit() {
  }

}
