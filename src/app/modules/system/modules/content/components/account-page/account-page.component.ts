import {Component, OnDestroy, OnInit} from '@angular/core';
import {Booking} from '../../../../../../core/models/entities/interfaces';
import {ToursService} from '../../../../../../core/services/tours.service';
import {PaymentService} from '../../../../../../core/services/payment.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TourPaymentRequest} from '../../../../../../core/models/requests/tour-payment-request';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit, OnDestroy {
  profile = JSON.parse(localStorage.getItem('profile'));
  totalPrice = 0;
  public paymentForm: FormGroup;
  bookings: Booking[] = [];
  mySubscription: Subscription;
  creditMask = [/[1-9]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];
  securityMask = [/[0-9]/, /\d/, /\d/];
  dateMask = [/[0-9]/, /\d/, '/', /\d/, /\d/];

  constructor(private toursService: ToursService,
              private pdfService: PaymentService,
              private builder: FormBuilder) {
  }

  ngOnInit(): void {
    console.log('Profile', this.profile);
    this.bookings = this.profile.bookings;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.profile.bookings.length; i++) {
      this.totalPrice += this.profile.bookings[i].booking_price * this.profile.bookings[i].booking_number_of_persons;
    }
    this.paymentForm = this.builder.group({
      id: ['']
    });
  }
  ngOnDestroy(): void {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
  deleteTour(id: number) {
    this.mySubscription = this.toursService.deleteTourById(id).subscribe(perf => {
      //this.bookings = this.bookings.filter(bkTour => bkTour.id !== id);
      console.log('TOUR WAS DELETED');
    }, (err) => {
      console.log(err);
    });
  }

  approveBooking() {
    const tourPaymentRequest = this.paymentForm.getRawValue() as TourPaymentRequest;
    this.pdfService.approvePayment(tourPaymentRequest).subscribe( perf => {
      console.log('Tour WAS APPROVED!');
    });
  }
}
