import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ToursListPageComponent} from './components/tours-list-page/tours-list-page.component';
import {SoloTourPageComponent} from './components/solo-tour-page/solo-tour-page.component';
import {AccountPageComponent} from './components/account-page/account-page.component';
import {AuthGateGuard} from '../../../../core/guards/auth-gate.guard';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'tours',
    component: ToursListPageComponent,
    canActivate: [AuthGateGuard]
  },
  {
    path: 'tour/:id',
    component: SoloTourPageComponent,
    canActivate: [AuthGateGuard]
  },
  {
    path: 'account',
    component: AccountPageComponent,
    canActivate: [AuthGateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule {
}
