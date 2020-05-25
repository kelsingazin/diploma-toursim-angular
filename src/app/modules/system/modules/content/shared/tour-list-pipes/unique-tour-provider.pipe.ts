import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({name: 'uniqueTourProviderPipe', pure: false})
export class UniqueTourProviderPipe implements PipeTransform{
  transform(value: any): any {
    if (value !== undefined && value !== null) {
      return _.uniqBy(value, 'travel_agent_id.travel_agent_name');
    }
    return value;
  }
}
