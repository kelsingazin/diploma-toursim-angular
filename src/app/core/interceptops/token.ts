import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private route: ActivatedRoute) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.checkAuthorized()) {
      req = req.clone({
        setHeaders: {
          Authorization: `${this.authService.getToken()}`
        }
      });
    }
    return next.handle(req);
  }
}
