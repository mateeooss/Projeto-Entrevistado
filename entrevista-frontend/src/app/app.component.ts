import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {

  title = 'Entrevistado ';
  loadedStates = false;
  ipLogin = '/';

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  public checkVisible(): any {
    const url = this._router.url;
    
    if(url.includes('login') || url === this.ipLogin) {
      return false;
    } else {
      return true;
    }
  }

  get user(): any {
    return localStorage.getItem('nome');
  }  
  
  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('nome');
  }


}
