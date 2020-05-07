import {Pipe, PipeTransform} from '@angular/core';
import {Review} from '../../../../../../core/models/entities/interfaces';
@Pipe({
  name: 'soloTitlePipe'
})
export class SoloTitlePipe implements PipeTransform{
  transform(reviews: Review[], search = ''): any {
    if (!search.trim()) {
      return reviews;
    }
    return reviews.filter(review => {
      return review.review_title.toLowerCase().includes(search.toLowerCase());
    });
  }
}

