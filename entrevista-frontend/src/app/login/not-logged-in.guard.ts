import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService} from './login.service'

@Injectable({ providedIn: 'root' })
export class NotLoggedInGuard implements CanActivate {

  constructor(
    private router: Router,  
    private loginService: LoginService
  ) { }
  
  canActivate(): boolean {
    if (!this.loginService.isLoggedIn) {
      return true;
    }


    this.router.navigate(['/']);
    return false;
  }
}
