import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwitchMapDemoComponent } from './switch-map-demo.component';

const routes: Routes = [
  {
    path: '',
    component: SwitchMapDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitchMapDemoRoutingModule { }
