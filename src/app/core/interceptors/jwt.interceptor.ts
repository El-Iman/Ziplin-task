import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginReturn } from 'src/app/pages/auth/authentication-interface';
import { environment as env } from 'src/environments/environment';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  currentUser: LoginReturn = JSON.parse(localStorage.getItem('currentUser')!);
  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.currentUser?.token) {
      request.clone({
        url: env.apiUrl + request.url,
        setHeaders: {
          Authorization: `Bearer ${this.currentUser?.token}`
        }
      })
    }
    return next.handle(request);
  }
}
