import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BookingRequest} from '../models/requests/booking-request';
import {Observable} from 'rxjs';
import {Booking, Review} from '../models/entities/interfaces';
import {ReviewRequest} from '../models/requests/review-request';

@Injectable({providedIn: 'root'})
export class BookingService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public bookTour(request: BookingRequest, tour_id, tourDetailId): Observable<Booking> {
    return this.http.post<Booking>(`${this.apiUrl}/api/v1/fornow/tours/${tour_id}/${tourDetailId}/booking`, request);
  }
  public sendReview(request: ReviewRequest, tour_id): Observable<Review> {
    return this.http.post<Review>(`${this.apiUrl}/api/v1/fornow/tours/${tour_id}/reviews`, request);
  }

}
