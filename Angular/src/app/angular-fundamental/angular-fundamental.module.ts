import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFundamentalRoutingModule } from './angular-fundamental-routing.module';
import { PropertybinidingComponent } from './propertybiniding/propertybiniding.component';


@NgModule({
  declarations: [
    PropertybinidingComponent
  ],
  imports: [
    CommonModule,
    AngularFundamentalRoutingModule
  ]
})
export class AngularFundamentalModule { }
