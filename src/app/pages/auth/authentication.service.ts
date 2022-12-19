import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { LoginReturn } from './authentication-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  apiUrl: string = env.apiUrl ;

  login(email:any,password: any):Observable<LoginReturn> {
    return this.http.post<LoginReturn>(this.apiUrl + '/login', {email,password});
  }
}
