import {Pipe, PipeTransform} from '@angular/core';
import {Review} from '../../../../../../core/models/entities/interfaces';
@Pipe({
  name: 'soloContentPipe'
})
export class SoloContentPipe implements PipeTransform{
  transform(reviews: Review[], search = ''): any {
    if (!search.trim()) {
      return reviews;
    }
    return reviews.filter(review => {
      return review.review_text.toLowerCase().includes(search.toLowerCase());
    });
  }
}
