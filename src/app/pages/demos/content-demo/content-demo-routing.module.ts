import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentDemoComponent } from './content-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ContentDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentDemoRoutingModule { }
