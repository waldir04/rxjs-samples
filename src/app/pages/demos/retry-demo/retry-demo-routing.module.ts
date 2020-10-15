import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetryDemoComponent } from './retry-demo.component';

const routes: Routes = [
  {
    path: '',
    component: RetryDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetryDemoRoutingModule { }
