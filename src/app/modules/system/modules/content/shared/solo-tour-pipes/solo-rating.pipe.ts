import {Pipe, PipeTransform} from '@angular/core';
import {Review} from '../../../../../../core/models/entities/interfaces';
@Pipe({
  name: 'soloRatingPipe'
})
export class SoloRatingPipe implements PipeTransform{
  transform(reviews: Review[], search = ''): any {
    if (!search.trim() || search.includes('All')) {
      return reviews;
    }
    return reviews.filter(review => {
      return review.review_rating.toString().toLowerCase().includes(search.toLowerCase());
    });
  }
}
