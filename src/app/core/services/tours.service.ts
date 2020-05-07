import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tour} from '../models/entities/interfaces';

@Injectable({providedIn: 'root'})
export class ToursService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getTours(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/v1/fornow/tours`);
  }

  public getTourById(id: number): Observable<Tour> {
    return this.http.get<Tour>(`${this.apiUrl}/api/v1/fornow/tours/${id}`);
  }

  public deleteTourById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/v1/fornow/users/me/${id}`);
  }
}
