import {Pipe, PipeTransform} from '@angular/core';
import {Tour} from '../../../../../../core/models/entities/interfaces';


@Pipe({
  name: 'searchTourAgentPipe'
})
export class SearchTourAgentPipe implements PipeTransform{
  transform(tours: Tour[], search = ''): any {
    if (!search.trim() || search.includes('All')) {
      return tours;
    }
    return tours.filter(tour => {
      return tour.travel_agent_id.travel_agent_name.toLowerCase().includes(search.toLowerCase());
    });
  }
}
