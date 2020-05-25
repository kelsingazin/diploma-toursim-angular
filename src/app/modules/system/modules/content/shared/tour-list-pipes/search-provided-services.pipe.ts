import {Pipe, PipeTransform} from '@angular/core';
import {Tour} from '../../../../../../core/models/entities/interfaces';

@Pipe({name: 'searchProvidedServicesPipe'})
export class SearchProvidedServicesPipe implements PipeTransform {
  transform(tours: Tour[], search = ''): any {
    if (!search.trim() || search.includes('All')) {
      return tours;
    }
    return tours.filter(tour => {
      const tempArr: string[] = [];
      for (let i = 0; i < tour.provided_services.length; i++) {
      // @ts-ignore
        tempArr.push(tour.provided_services[i].service_name.toLowerCase());
      }
      return tempArr.includes(search.toLowerCase());
    });
  }

}
