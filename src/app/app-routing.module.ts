import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UnAuthGateGuard} from './core/guards/un-auth-gate.guard';


const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./modules/system/system.module').then(m => m.SystemModule),
    },
    {
      path: 'auth',
      loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
      canActivate: [UnAuthGateGuard]
    },
    {
      path: '**',
      redirectTo: '/'
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
