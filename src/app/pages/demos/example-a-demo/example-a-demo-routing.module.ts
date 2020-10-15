import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleADemoComponent } from './example-a-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleADemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleADemoRoutingModule { }
