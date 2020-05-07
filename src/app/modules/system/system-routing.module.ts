import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SystemComponent} from './system.component';


const routes: Routes = [{
    path: '',
    component: SystemComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/content/content.module').then(m => m.ContentModule),
      }
    ]
  }]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {
}
