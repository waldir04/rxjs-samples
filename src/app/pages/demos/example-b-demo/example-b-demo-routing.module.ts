import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleBDemoComponent } from './example-b-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleBDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleBDemoRoutingModule { }
