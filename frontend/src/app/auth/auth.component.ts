import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true
  sigupForm!: FormGroup;
  loginForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
      this.sigupForm = new FormGroup({
       'name': new FormControl(null,Validators.required),
      'username': new FormControl(null,[Validators.required,Validators.email]),
       'passwords': new FormGroup({
           'password': new FormControl(null,Validators.required),
           'confirmpassword': new FormControl(null, Validators.required)
         })
      })
      this.loginForm = new FormGroup({
        'email': new FormControl(null,[Validators.required,Validators.email]),
        'password': new FormControl(null, Validators.required)
      })
  }

  onSwitch() {
    this.isLoginMode = !this.isLoginMode
  }

  onSignup() {
      console.log(this.sigupForm)
  }


  onLogin() {
    console.log(this.loginForm)
  }

}
