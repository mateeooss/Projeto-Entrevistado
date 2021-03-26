import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService} from './login.service'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  credentials!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private loginService: LoginService) { }
  
  
  
  ngOnInit() {

    this.credentials = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    });
  }

  ngOnDestroy() { }

  submit() {
    console.log(this.credentials.value)
    this.loginService.autenticarLogin(this.credentials)
  }
}