import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareReplayDemoRoutingModule } from './share-replay-demo-routing.module';
import { ShareReplayDemoComponent } from './share-replay-demo.component';


@NgModule({
  declarations: [ShareReplayDemoComponent],
  imports: [
    CommonModule,
    ShareReplayDemoRoutingModule
  ]
})
export class ShareReplayDemoModule { }
