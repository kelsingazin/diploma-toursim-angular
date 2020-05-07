import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TourPaymentRequest} from '../models/requests/tour-payment-request';

@Injectable({providedIn: 'root'})
export class PaymentService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public approvePayment(request: TourPaymentRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/v1/fornow/users/me/payment`, request);
  }
}
