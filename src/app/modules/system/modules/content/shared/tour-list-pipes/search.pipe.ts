import {Pipe, PipeTransform} from '@angular/core';
import {Tour} from '../../../../../../core/models/entities/interfaces';


@Pipe({
  name: 'searchTours'
})
export class SearchPipe implements PipeTransform{
  transform(tours: Tour[], search = ''): any {
    if (!search.trim()) {
      return tours;
    }
    return tours.filter(tour => {
      return tour.title.toLowerCase().includes(search.toLowerCase());
    });
  }
}

