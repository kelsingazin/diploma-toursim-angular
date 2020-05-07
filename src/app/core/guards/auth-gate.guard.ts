import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthGateGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.checkAuthorized()) {
      return true;
    } else {
      this.router.navigateByUrl('/auth');
      return false;
    }
  }
}
