import {Pipe, PipeTransform} from '@angular/core';
import {Tour} from '../../../../../../core/models/entities/interfaces';


@Pipe({
  name: 'searchDurationPipe'
})
export class SearchDurationPipe implements PipeTransform{
  transform(tours: Tour[], search = ''): any {
    if (!search.trim() || search.includes('All')) {
      return tours;
    }
    return tours.filter(tour => {
      return tour.duration.toLowerCase().includes(search.toLowerCase());
    });
  }

}
