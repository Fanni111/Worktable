import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { UserService } from "../../service/user.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  ngOnInit() {
  }

  registrationFailedMessage: String;
  registerForm: FormGroup;
  model: User;
  
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) { 
    this.createForm();
  }
  
  createForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      pass: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  submit() {
    //Model értékének beállítása:
    this.model = new User();
    this.model.password = this.registerForm.value.pass;
    this.model.name = this.registerForm.value.name;
    this.model.email = this.registerForm.value.email;
    console.log(JSON.stringify(this.model));

    this.userService.registerUser(this.model)
    .then(() => {
      console.log("Go to /index");
      this.router.navigateByUrl('/index');
    })
    .catch(() =>{
      console.log("Registration failed");
      this.registrationFailedMessage = "Registration failed!"
    });
  }

}
