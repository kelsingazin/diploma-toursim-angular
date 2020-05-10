import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Tour} from '../../../../../../core/models/entities/interfaces';
import {ToursService} from '../../../../../../core/services/tours.service';
import {FormGroup} from '@angular/forms';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tours-list-page',
  templateUrl: './tours-list-page.component.html',
  styleUrls: ['./tours-list-page.component.css']
})
export class ToursListPageComponent implements OnInit {
  tours$: any;
  searchTitle: '';
  searchDuration: '';
  searchTourAgent: '';
  tourTypeName: '';
  tourAsc: '';

  constructor(private toursService: ToursService,
              private location: Location,
              private router: Router) {
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.tours$ = this.toursService.getTours();
  }

  resetFilter() {
    this.router.navigateByUrl('/tours');
  }

}
