import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcatMapDemoComponent } from './concat-map-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ConcatMapDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcatMapDemoRoutingModule { }
