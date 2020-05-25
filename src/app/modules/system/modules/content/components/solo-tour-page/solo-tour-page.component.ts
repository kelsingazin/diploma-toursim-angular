import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Tour} from '../../../../../../core/models/entities/interfaces';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ToursService} from '../../../../../../core/services/tours.service';
import {switchMap} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookingRequest} from '../../../../../../core/models/requests/booking-request';
import {BookingService} from '../../../../../../core/services/booking.service';
import {ReviewRequest} from '../../../../../../core/models/requests/review-request';
import {environment} from '../../../../../../../environments/environment';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-solo-tour-page',
  templateUrl: './solo-tour-page.component.html',
  styleUrls: ['./solo-tour-page.component.css']
})
export class SoloTourPageComponent implements OnInit{
  soloTour$: Observable<Tour>;
  public bookingForm: FormGroup;
  public reviewForm: FormGroup;
  tourId: number;
  tourDetailId: number;
  tourStartDate: any;
  tourEndDate: any;
  curPersonNumber: number;
  tourPersonNumber: number;
  reviewRatingFilter: '';
  reviewTitleFilter: '';
  reviewContentFilter: '';


  constructor(private route: ActivatedRoute,
              private router: Router,
              private toursService: ToursService,
              private bookingService: BookingService,
              private builder: FormBuilder,
              private toastr: ToastrService
              ) {
  }

  ngOnInit(): void {
    this.soloTour$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.toursService.getTourById(params['id']);
      }));
    this.soloTour$.subscribe(prepareTour => {
      console.log('prepareTour ', prepareTour);
      // console.log(
      //   'cur_person_number ' + prepareTour.tour_detail[0].cur_person_number +
      //   '\ntour_person_number ' + prepareTour.tour_detail[0].tour_person_number +
      //   '\ntour_start_date ' + prepareTour.tour_detail[0].tour_start_date +
      //   '\ntour_end_date ' + prepareTour.tour_detail[0].tour_end_date +
      //   '\ntour_detail_id ' + prepareTour.tour_detail[0].id);
      this.tourId = prepareTour.id;
      this.tourDetailId = prepareTour.tour_detail[0].id;
      this.tourStartDate = prepareTour.tour_detail[0].tour_start_date;
      this.tourEndDate = prepareTour.tour_detail[0].tour_end_date;
      this.curPersonNumber = prepareTour.tour_detail[0].cur_person_number;
      this.tourPersonNumber = prepareTour.tour_detail[0].tour_person_number;
      this.bookingForm = this.builder.group({
        booking_status: ['Waiting for payment'],
        booking_number_of_persons: ['', Validators.required]
      });
    });

    this.reviewForm = this.builder.group({
      review_title: ['', Validators.required],
      review_text: ['', Validators.required],
      review_rating: ['', Validators.required]
    });

  }

  bookTour() {
    console.log("test");
    if (this.curPersonNumber + this.bookingForm.value.booking_number_of_persons > this.tourPersonNumber) {
      this.bookingForm.reset();
      this.toastr.error('Exceeded the maximum number of tour participants!', 'Sorry!');
    } else {
      const bookingRequest = this.bookingForm.getRawValue() as BookingRequest;
      this.bookingService.bookTour(bookingRequest, this.tourId, this.tourDetailId).subscribe(perf => {
        this.router.navigateByUrl('/account');
      });
    }

  }

  sendReview() {
    const reviewRequest = this.reviewForm.getRawValue() as ReviewRequest;

    this.bookingService.sendReview(reviewRequest, this.tourId).subscribe(perf => {
      this.router.navigateByUrl(`/tour/${this.tourId}`);
      this.reviewForm.reset();
    });
  }
}
