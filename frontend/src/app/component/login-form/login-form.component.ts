import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../service/user.service';


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginFailedMessage: String;
  loginForm: FormGroup;
  model: User;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }


  submit(){
    if(this.userService.getUserLoggedIn()){
      this.loginFailedMessage = "I won't let you login again...";
      return;
    }
    
    //Model értékének beállítása:
    this.model = new User();
    this.model.username = this.loginForm.value.name;
    this.model.password = this.loginForm.value.pass;
    console.log("Submituser: "+ this.model.username);
    console.log("Submit model: "+this.model);
    this.userService.loginUser(this.model)
    .then(() => {
      this.router.navigateByUrl('/profile');
    })
    .catch(() => {
      this.loginFailedMessage = "Login failed!";
    });

  }

}
