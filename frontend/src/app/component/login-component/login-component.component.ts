import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

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

  loginFailedMessage: String;
  loginForm: FormGroup;
  model: User;

  submit(){
    if(this.userService.getUserLoggedIn()){
      this.loginFailedMessage = "I won't let you login again...";
      return;
    }
    //Model értékének beállítása:
    this.model = new User();
    this.model.password = this.loginForm.value.pass;
    this.model.name = this.loginForm.value.name;
    this.model.role = "WORKER";
    this.userService.loginUser(this.model)
    .then(() => {
      this.router.navigateByUrl('/profile');
    })
    .catch(() => {
      this.loginFailedMessage = "Login failed!";
    });

  }

}
