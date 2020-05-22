import {Component, Input, OnInit} from '@angular/core';
import {Tour} from '../../../../../../core/models/entities/interfaces';
import {AuthService} from '../../../../../../core/services/auth.service';
import {environment} from '../../../../../../../environments/environment';

@Component({
  selector: 'app-tours-page',
  templateUrl: './tours-page.component.html',
  styleUrls: ['./tours-page.component.css']
})
export class ToursPageComponent implements OnInit {
  @Input() tour: Tour;
  srcUrl = environment.apiUrl;

  constructor() {
  }

  ngOnInit(): void {
    //console.log('Tour', this.tour);
  }

}
