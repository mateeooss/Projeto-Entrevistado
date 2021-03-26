import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import axios from 'axios';
//import swal from 'sweetalert';

declare var $: any;
declare const showMessage: any;

@Injectable({ providedIn: 'root' })
export class LoginService {
    
    constructor(private router: Router){}

    public autenticarLogin(credentials: FormGroup) {
      
         axios.post(`${environment.apiUrl}/login`, credentials.value)
          .then((response) => {
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('nome', response.data.perfil.login);
            this.router.navigate(['/entrevista']);
  
          })
    }
  
    public get isLoggedIn(): boolean {
      return localStorage.getItem('nome') != null;
    }
    
}