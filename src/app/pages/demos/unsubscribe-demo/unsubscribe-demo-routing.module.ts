import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnsubscribeDemoComponent } from './unsubscribe-demo.component';

const routes: Routes = [
  {
    path: '',
    component: UnsubscribeDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnsubscribeDemoRoutingModule { }
