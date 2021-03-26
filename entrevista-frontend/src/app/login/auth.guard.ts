import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService} from './login.service'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }



  canActivate(): boolean {
    if (this.loginService.isLoggedIn) {   
      return true;
    }
    
    // , { queryParams: { returnUrl: state.url } }
    this.router.navigate(['/login']);
    return false;
  }
}
