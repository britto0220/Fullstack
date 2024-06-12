import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'AngularFundamental', loadChildren: () => import('./angular-fundamental/angular-fundamental.module').then(m => m.AngularFundamentalModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
