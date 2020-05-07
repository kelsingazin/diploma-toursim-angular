import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Tour} from '../../../../../../core/models/entities/interfaces';
import {ToursService} from '../../../../../../core/services/tours.service';

@Component({
  selector: 'app-tours-list-page',
  templateUrl: './tours-list-page.component.html',
  styleUrls: ['./tours-list-page.component.css']
})
export class ToursListPageComponent implements OnInit {
  tours$: Observable<Tour[]>;
  searchTitle: '';
  searchDuration: '';
  searchTourAgent: '';

  constructor(private toursService: ToursService) {
  }

  ngOnInit(): void {
    this.tours$ = this.toursService.getTours();
  }

}
