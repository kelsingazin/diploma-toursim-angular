import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContentRoutingModule} from './content-routing.module';
import {HomePageComponent} from './components/home-page/home-page.component';
import {AuthModule} from '../../../auth/auth.module';
import {ToursPageComponent} from './components/tours-page/tours-page.component';
import {ToursListPageComponent} from './components/tours-list-page/tours-list-page.component';
import {SoloTourPageComponent} from './components/solo-tour-page/solo-tour-page.component';
import {AccountPageComponent} from './components/account-page/account-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchPipe} from './shared/tour-list-pipes/search.pipe';
import {SearchDurationPipe} from './shared/tour-list-pipes/search-duration.pipe';
import {SearchTourAgentPipe} from './shared/tour-list-pipes/search-tour-agent.pipe';
import {SoloTitlePipe} from './shared/solo-tour-pipes/solo-title.pipe';
import {SoloContentPipe} from './shared/solo-tour-pipes/solo-content.pipe';
import {SoloRatingPipe} from './shared/solo-tour-pipes/solo-rating.pipe';
import {TextMaskModule} from 'angular2-text-mask';
import {TourAscPipe} from './shared/tour-list-pipes/tour-asc.pipe';
import {UniqueDurationPipe} from './shared/tour-list-pipes/unique-duration.pipe';
import {UniqueTourProviderPipe} from './shared/tour-list-pipes/unique-tour-provider.pipe';
import {TourTypePipe} from './shared/tour-list-pipes/tour-type.pipe';
import {SearchProvidedServicesPipe} from './shared/tour-list-pipes/search-provided-services.pipe';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [HomePageComponent, ToursPageComponent, ToursListPageComponent, SoloTourPageComponent, AccountPageComponent, SearchPipe, SearchDurationPipe, SearchTourAgentPipe, SoloTitlePipe, SoloContentPipe, SoloRatingPipe, TourAscPipe, UniqueDurationPipe, UniqueTourProviderPipe, TourTypePipe, SearchProvidedServicesPipe],
    imports: [
        CommonModule,
        ContentRoutingModule,
        AuthModule,
        FormsModule,
        ReactiveFormsModule,
        TextMaskModule,
    ]
})
export class ContentModule {
}
