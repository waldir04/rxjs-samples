import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShareReplayDemoComponent } from './share-replay-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ShareReplayDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareReplayDemoRoutingModule { }
