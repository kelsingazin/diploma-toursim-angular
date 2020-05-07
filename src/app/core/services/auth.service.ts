import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {RegisterUserRequest} from '../models/requests/register-user-request';
import {Observable} from 'rxjs';
import {AuthResponse, User} from '../models/entities/interfaces';
import {LoginRequest} from '../models/requests/login-request';


@Injectable({providedIn: 'root'})

export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public register(request: RegisterUserRequest): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/auth/users/`, request);
  }

  public login(request: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/token/login`, request);
  }

  public authorize(token: string) {
    localStorage.setItem('token', `Token ${token}`);
  }

  public clearAll() {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
  }

  public checkAuthorized(): boolean {
    return !!localStorage.getItem('token');
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public userRequest() {
    return this.http.get(`${this.apiUrl}/api/v1/fornow/users/me`);
  }
}
