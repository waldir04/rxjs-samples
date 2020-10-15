import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatchErrorDemoComponent } from './catch-error-demo.component';

const routes: Routes = [
  {
    path: '',
    component: CatchErrorDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatchErrorDemoRoutingModule { }
