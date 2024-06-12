import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertybinidingComponent } from './propertybiniding/propertybiniding.component';

const routes: Routes = [{ path: '', component: PropertybinidingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularFundamentalRoutingModule { }
