import {Pipe, PipeTransform} from '@angular/core';
import {Tour} from '../../../../../../core/models/entities/interfaces';

@Pipe({name: 'tourAscPipe'})
export class TourAscPipe implements PipeTransform {
  transform(tours: Tour[], search = ''): any {
    if (!search.trim() || search === 'All') {
      return tours.sort((a, b) => {
        const keyA = a.id;
        const keyB = b.id;
        return keyA - keyB;
      });
    } else if (!search.trim() || search === 'Least Popular') {
      return tours.sort((a, b) => {
        const keyA = a.tour_rating;
        const keyB = b.tour_rating;
        return keyA - keyB;
      });
    } else if (!search.trim() || search === 'Most Popular') {
      return tours.sort((a, b) => {
        const keyA = a.tour_rating;
        const keyB = b.tour_rating;
        return keyB - keyA;
      });
    } else {
      return tours;
    }
  }
}
