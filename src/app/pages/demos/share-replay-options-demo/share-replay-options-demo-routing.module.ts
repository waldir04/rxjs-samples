import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShareReplayOptionsDemoComponent } from './share-replay-options-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ShareReplayOptionsDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareReplayOptionsDemoRoutingModule { }
