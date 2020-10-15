import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetryWhenDemoComponent } from './retry-when-demo.component';

const routes: Routes = [
  {
    path: '',
    component: RetryWhenDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetryWhenDemoRoutingModule { }
