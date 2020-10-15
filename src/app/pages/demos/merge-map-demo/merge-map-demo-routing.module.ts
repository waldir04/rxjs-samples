import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MergeMapDemoComponent } from './merge-map-demo.component';

const routes: Routes = [
  {
    path: '',
    component: MergeMapDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MergeMapDemoRoutingModule { }
