import {Component, OnInit} from '@angular/core';
import {ToursService} from '../../../../../../core/services/tours.service';
import {Observable} from 'rxjs';
import {Tour} from '../../../../../../core/models/entities/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  toursCounter$: Observable<Tour[]>;
  kk: any;
  size = 1;

  constructor(private toursService: ToursService) {
  }

  ngOnInit(): void {
    for (this.kk in this.toursService.getTours()) {
      this.size++;
    }
  }

}
