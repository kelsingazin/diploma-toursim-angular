import {Component, Inject, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Booking} from '../../../../../../core/models/entities/interfaces';
import {ToursService} from '../../../../../../core/services/tours.service';
import {PaymentService} from '../../../../../../core/services/payment.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TourPaymentRequest} from '../../../../../../core/models/requests/tour-payment-request';
import {Subscription} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {DOCUMENT, Location} from '@angular/common';
import {environment} from '../../../../../../../environments/environment';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit, OnDestroy, OnChanges {
  profile = JSON.parse(localStorage.getItem('profile'));
  totalPrice = 0;
  public paymentForm: FormGroup;
  bookings: Booking[] = [];
  mySubscription: Subscription;
  urlPdf = environment.apiUrl;

  constructor(private toursService: ToursService,
              private pdfService: PaymentService,
              private builder: FormBuilder,
              private toastr: ToastrService,
              private location: Location,
              private router: Router,
              @Inject(DOCUMENT) private document: Document) {
  }
  loadTours(){
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.profile.bookings.length; i++) {
      this.totalPrice += this.profile.bookings[i].booking_price * this.profile.bookings[i].booking_number_of_persons;
    }
  }
  ngOnInit(){
    // this.router.routeReuseStrategy.shouldReuseRoute = () => {
    //   return false;
    // };

    // console.log('Profile', this.profile);
    this.bookings = this.profile.bookings;
    this.loadTours();
    this.paymentForm = this.builder.group({
      id: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (this.bookings.length !== 0){
    //   this.onReloadPage();
    // }
  }

  ngOnDestroy(): void {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
  deleteTour(id: number) {
    this.mySubscription = this.toursService.deleteTourById(id).subscribe(perf => {
      this.toastr.info('', 'Tour was deleted!');
      location.reload();
      console.log('TOUR WAS DELETED');
    }, (err) => {
      console.log(err);
    });
  }

  approveBooking() {
    const tourPaymentRequest = this.paymentForm.getRawValue() as TourPaymentRequest;
    this.pdfService.approvePayment(tourPaymentRequest).subscribe( perf => {
      this.toastr.success('', 'Tour WAS APPROVED!');
      this.onReloadPage();
      this.onReloadPage2();
      this.onReloadPage();
      this.document.defaultView.location.reload();
      this.document.defaultView.location.reload();
      this.document.defaultView.location.reload();
      this.document.defaultView.location.reload();
      console.log('Tour WAS APPROVED!');
    });
  }

  onReloadPage() {
    // console.log('/account');
    // this.router.navigateByUrl('account');
    this.document.defaultView.location.reload();
  }
  onReloadPage2() {
    // console.log('/account');
    // this.router.navigateByUrl('account');
    this.document.defaultView.location.reload();
  }
}
