import {Component, Input, OnInit} from '@angular/core';
import {Tour} from '../../../../../../core/models/entities/interfaces';

@Component({
  selector: 'app-tours-page',
  templateUrl: './tours-page.component.html',
  styleUrls: ['./tours-page.component.css']
})
export class ToursPageComponent implements OnInit {
  @Input() tour: Tour;
  constructor() {
  }

  ngOnInit(): void {
    console.log('Tour', this.tour);
  }

}
