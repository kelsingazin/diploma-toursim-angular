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


@NgModule({
  declarations: [HomePageComponent, ToursPageComponent, ToursListPageComponent, SoloTourPageComponent, AccountPageComponent, SearchPipe, SearchDurationPipe, SearchTourAgentPipe, SoloTitlePipe, SoloContentPipe, SoloRatingPipe],
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
