import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZipDemoComponent } from './zip-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ZipDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZipDemoRoutingModule { }
