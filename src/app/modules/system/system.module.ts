import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import {AuthModule} from '../auth/auth.module';


@NgModule({
  declarations: [SystemComponent],
  imports: [
    CommonModule,
    SystemRoutingModule,
    AuthModule
  ]
})
export class SystemModule { }
