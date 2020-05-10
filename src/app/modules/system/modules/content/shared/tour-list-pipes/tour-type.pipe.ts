import {Pipe, PipeTransform} from '@angular/core';
import {Tour} from '../../../../../../core/models/entities/interfaces';

@Pipe({name: 'tourTypePipe'})
export class TourTypePipe implements PipeTransform {
  transform(tours: Tour[], search = ''): any {
    if (!search.trim() || search.includes('All')) {
      return tours;
    }
    return tours.filter(tour => {
      const tempArr: string[] = [];
      for (let i = 0; i < tour.type_of_tour.length; i++) {
        // @ts-ignore
        tempArr.push(tour.type_of_tour[i].type_of_tour_name.toLowerCase());
      }
      // return tour.duration.toLowerCase().includes(search.toLowerCase());

      return tempArr.includes(search.toLowerCase());
    });
  }
}
